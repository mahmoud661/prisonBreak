import Link from "next/link";
import { KeyRound } from "lucide-react";
import Header from "@/components/header";

export default function LoginPage() {
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
          <form className="space-y-6">
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
              <input
                type="password"
                id="password"
                name="password"
                required
                className="block w-full px-4 py-2 border border-zinc-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-red-500 dark:bg-zinc-700 dark:border-zinc-600 dark:text-zinc-200"
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-red-800 hover:bg-red-700 text-white rounded-md font-medium transition-colors shadow-lg shadow-red-900/50 group flex items-center justify-center space-x-2"
            >
              <KeyRound className="h-5 w-5 mr-3" />
              Log In
            </button>
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
