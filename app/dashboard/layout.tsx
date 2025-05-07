import React from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="dashboard-layout">
      <div className="flex">
        <aside className="w-64 h-screen bg-gray-100 dark:bg-gray-800 p-6 flex flex-col justify-between">
          <nav className="space-y-2">
            <h3 className="font-medium text-lg mb-4 dark:text-gray-200">
              Dashboard Menu
            </h3>
            <Link
              href="/dashboard"
              className="block py-2 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
            >
              Overview
            </Link>
            <Link
              href="/dashboard"
              className="block py-2 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
            >
              Statistics
            </Link>
            <Link
              href="/dashboard"
              className="block py-2 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
            >
              Settings
            </Link>
          </nav>
          <div>
            <ThemeToggle />
          </div>
        </aside>

        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
