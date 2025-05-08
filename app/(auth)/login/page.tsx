"use client";
import Link from "next/link";
import { KeyRound, Eye, EyeOff, X } from "lucide-react";
import Header from "@/components/header";
import { useState } from "react";
import { useAuthStore } from "@/store/authStore";
import { useRouter } from "next/navigation"; //will use this

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [userName, setUserName] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleCloseMessage = () => {
    setShowErrorMessage(false);
  };

  //login logic goes here
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userName, password }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Login failed");
      }

      const token = await res.json();
      const { setToken } = useAuthStore.getState();
      setToken(token);
      setLoading(false);
    } catch (error) {
      setError(error instanceof Error ? error.message : "Login failed");
    } finally {
      setLoading(false);
      setShowErrorMessage(true);
    }
  }

  return (
    <main
      className="min-h-screen transition-colors duration-300
      dark:bg-[url('/prison-wall-bg.jpg')] dark:bg-cover dark:bg-center dark:bg-no-repeat dark:bg-blend-overlay dark:bg-black/90
      bg-zinc-50 bg-[url('/prison-wall-bg.jpg')] bg-cover bg-center bg-no-repeat bg-blend-overlay bg-white/90"
    >
      <div className="container mx-auto px-4 py-8 md:py-16">
        {/* Header with theme toggle */}
        <Header />

        {/* Login form section */}
        <div className="max-w-md mx-auto bg-white dark:bg-zinc-800 rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-center text-zinc-900 dark:text-zinc-100 mb-6">
            Log In to Your Account
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={userName || ""}
                onChange={(e) => setUserName(e.target.value)}
                required
                className="block w-full px-4 py-2 border border-zinc-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-red-500 dark:bg-zinc-700 dark:border-zinc-600 dark:text-zinc-200"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={password || ""}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="block w-full px-4 py-2 border border-zinc-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-red-500 dark:bg-zinc-700 dark:border-zinc-600 dark:text-zinc-200"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200 focus:outline-none"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-red-800 hover:bg-red-700 text-white rounded-md font-medium transition-colors shadow-lg shadow-red-900/50 group flex items-center justify-center space-x-2"
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Loading...
                </>
              ) : (
                <>
                  <KeyRound className="h-5 w-5 mr-3" />
                  Log In
                </>
              )}
            </button>            {/* Error message */}
            {error && showErrorMessage && (
              <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-md flex justify-between items-center">
                <p className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                  {error}
                </p>
                <button 
                  onClick={handleCloseMessage}
                  className="ml-4 p-1 hover:bg-red-200 rounded-full"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            )}
          </form>
          <div className="mt-4 text-center">
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Don&apos;t have an account?{" "}
              <Link
                href="/register"
                className="text-red-600 hover:text-red-500 font-medium"
              >
                Register here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
