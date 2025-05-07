"use client";

import React, { useEffect } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import SideBar from "@/components/sideBar";
import Link from "next/link";
import { Bell, Shield, Menu } from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const toggleMobileSidebar = () => {
    const sidebar = document.querySelector("aside");
    const overlay = document.getElementById("mobile-nav-overlay");

    if (sidebar && overlay) {
      const isHidden = sidebar.classList.contains("-translate-x-full");

      sidebar.classList.toggle("-translate-x-full", !isHidden);

      overlay.classList.toggle("hidden", !isHidden);

      document.body.classList.toggle("overflow-hidden", !isHidden);
    }
  };

  useEffect(() => {
    const handleOverlayClick = () => {
      toggleMobileSidebar();
    };

    const overlay = document.getElementById("mobile-nav-overlay");
    if (overlay) {
      overlay.addEventListener("click", handleOverlayClick);
    }

    return () => {
      if (overlay) {
        overlay.removeEventListener("click", handleOverlayClick);
      }
    };
  }, []);

  return (
    <div className="dashboard-layout flex h-screen overflow-hidden">
      <SideBar />

      <div className="flex-1 flex flex-col md:ml-64 transition-all duration-300">
        {/* Top header bar with prison theme */}
        <header className="h-16 bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between px-4 md:px-6 shadow-md">
          <div className="flex items-center space-x-4">
            {/* Mobile menu button - only visible on mobile */}
            <button
              onClick={toggleMobileSidebar}
              className="p-2 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-zinc-500 dark:text-zinc-400 md:hidden"
              aria-label="Open navigation menu"
            >
              <Menu size={20} />
            </button>
          </div>

          <div className="flex items-center space-x-2 md:space-x-4">
            <div className="hidden md:flex text-xs bg-zinc-200 dark:bg-zinc-800 px-3 py-1 rounded-full border border-zinc-300 dark:border-zinc-700">
              <span className="text-zinc-600 dark:text-zinc-400">ID:</span>{" "}
              <span className="text-zinc-700 dark:text-zinc-300">
                GRD-2023-104
              </span>
            </div>

            <ThemeToggle />
          </div>
        </header>

        <main className="p-4 md:p-6 bg-zinc-50 dark:bg-zinc-900 flex-1 overflow-y-auto text-zinc-900 dark:text-zinc-100">
          {children}
        </main>
      </div>
    </div>
  );
}
