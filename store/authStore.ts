import { create } from 'zustand';
import { persist } from 'zustand/middleware';


interface User {
    id: string;
    username: string;
    name?: string;
    role: string;
}


interface AuthState {
    user: User | null;
    token: string | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    error: string | null;


    login: (username: string, password: string) => Promise<void>;
    register: (username: string, password: string, name: string) => Promise<void>;
    logout: () => void;
    clearError: () => void;
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            user: null,
            token: null,
            isAuthenticated: false,
            isLoading: false,
            error: null,

            login: async (username: string, password: string) => {
                try {
                    set({ isLoading: true, error: null });


                    const mockUser = { id: '1', username, role: 'user' };
                    const mockToken = 'mock-jwt-token';

                    // Simulate API delay
                    await new Promise(resolve => setTimeout(resolve, 500));

                    set({
                        user: mockUser,
                        token: mockToken,
                        isAuthenticated: true,
                        isLoading: false,
                    });
                } catch (error) {
                    set({
                        isLoading: false,
                        error: error instanceof Error ? error.message : 'Failed to login',
                    });
                }
            },

            register: async (username: string, password: string, name: string) => {
                try {
                    set({ isLoading: true, error: null });

                    // will be replaced with an API call
                    const mockUser = { id: '1', username, name, role: 'user' };
                    const mockToken = 'mock-jwt-token';

                    // Simulate API delay
                    await new Promise(resolve => setTimeout(resolve, 500));

                    set({
                        user: mockUser,
                        token: mockToken,
                        isAuthenticated: true,
                        isLoading: false,
                    });
                } catch (error) {
                    set({
                        isLoading: false,
                        error: error instanceof Error ? error.message : 'Failed to register',
                    });
                }
            },

            logout: () => {
                set({
                    user: null,
                    token: null,
                    isAuthenticated: false,
                });
            },

            clearError: () => {
                set({ error: null });
            },
        }),
        {
            name: 'auth-storage',
        }
    )
);