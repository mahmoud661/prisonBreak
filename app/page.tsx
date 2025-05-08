import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { Shield, ArrowRight, Lock, KeyRound   } from "lucide-react";
import Header from "@/components/header";

export default function Home() {
  return (
    <main
      className="min-h-screen transition-colors duration-300
      dark:bg-[url('/prison-wall-bg.jpg')] dark:bg-cover dark:bg-center dark:bg-no-repeat dark:bg-blend-overlay dark:bg-black/90
      bg-zinc-50 bg-[url('/prison-wall-bg.jpg')] bg-cover bg-center bg-no-repeat bg-blend-overlay bg-white/90"
    >
      <div className="container mx-auto px-4 py-8 md:py-16">
        {/* Header with theme toggle */}
        <Header />

        {/* Hero section */}
        <div className="max-w-3xl mx-auto text-center mt-24 mb-16">
          <div className="inline-block px-3 py-1 border border-red-800 rounded-sm bg-red-900/30 text-red-500 text-xs font-medium tracking-wider mb-4">
            RESTRICTED ACCESS
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-zinc-900 dark:text-zinc-100 mb-6">
            Maximum Security Prison Management System
          </h1>
          <p className="text-lg md:text-xl text-zinc-700 dark:text-zinc-400 mb-8">
            Secure monitoring and administration of inmate records, security
            protocols, and facility operations for Iron Gate Maximum Security
            Prison.
          </p>
          <div className="flex justify-center space-x-4">
            <div className="flex space-x-4">
              <Link
                href="/login"
                className="inline-flex items-center px-6 py-3 bg-red-800 hover:bg-red-700 text-white rounded-md font-medium transition-colors shadow-lg shadow-red-900/50 group"
              >
                <KeyRound className="mr-2 h-5 w-5" />
                Log In
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="space-x-4">
              <Link
                href="/dashboard"
                className="inline-flex items-center px-6 py-3 bg-red-800 hover:bg-red-700 text-white rounded-md font-medium transition-colors shadow-lg shadow-red-900/50 group"
              >
                <Lock className="mr-2 h-5 w-5" />
                Access Dashboard
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Warning footer */}
        <div className="max-w-4xl mx-auto mt-32 border-t border-zinc-300 dark:border-zinc-800 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-zinc-600 dark:text-zinc-500 text-sm">
              &copy; 2025 Department of Corrections | Prison Break Maximum Security
              Facility
            </p>
            <div className="flex items-center text-xs text-zinc-700 dark:text-zinc-600 bg-zinc-200/80 dark:bg-zinc-900/50 px-3 py-1 rounded border border-zinc-300 dark:border-zinc-800">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
              SYSTEM SECURE • AUTHORIZED PERSONNEL ONLY
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
