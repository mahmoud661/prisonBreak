import { create } from 'zustand';
import { persist } from 'zustand/middleware';

function decodeToken(token: string | null): any {
    if (!token) return null;
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/_/g, "/").replace(/-/g, "+");
    const jsonPayload = decodeURIComponent(
        atob(base64)
            .split("")
            .map((c) => `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`)
            .join("")
    );
    return JSON.parse(jsonPayload);
}

interface AuthState {
    token: string | null;

    isAuthenticated: boolean;
    isTokenExpired: () => boolean;
    login: (token: string) => void;
    logout: () => void;
    getUser: () => any;
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set, get) => ({
            token: null,
            isAuthenticated: false,

            isTokenExpired: () => {
                const token = get().token;
                if (!token) return true;

                const decoded = decodeToken(token);
                if (!decoded || !decoded.exp) return true;

                return decoded.exp * 1000 < Date.now();
            },

            login: (token: string) => {
                set({
                    token,
                    isAuthenticated: true
                });
            },

            logout: () => {
                set({
                    token: null,
                    isAuthenticated: false
                });
            },

            getUser: () => {
                const token = get().token;
                return token ? decodeToken(token) : null;
            }


        }),
        {
            name: 'auth-storage',
            partialize: (state) => ({ token: state.token })
        }
    )
);

