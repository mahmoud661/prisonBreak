import React from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import SideBar from "@/components/sideBar";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="dashboard-layout flex">
      <SideBar />

      <div className="flex-1 ml-64">
        {/* Top header bar with prison theme */}
        <header className="h-16 bg-zinc-900 border-b border-zinc-800 flex items-center justify-between px-6 shadow-md">
          <div className="flex items-center">
            <h2 className="text-zinc-300 font-medium">
              SECURITY LEVEL:{" "}
              <span className="text-red-500 font-bold">MAXIMUM</span>
            </h2>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-xs bg-zinc-800 px-3 py-1 rounded-full border border-zinc-700">
              <span className="text-zinc-400">ID:</span>{" "}
              <span className="text-zinc-300">GRD-2023-104</span>
            </div>
            <div className="h-8 w-8 bg-zinc-800 rounded-full flex items-center justify-center border border-zinc-700">
              <span className="text-zinc-300 text-sm">GO</span>
            </div>
            <ThemeToggle />
          </div>
        </header>

        <main className="p-6 bg-zinc-900 min-h-[calc(100vh-4rem)]">
          {children}
        </main>
      </div>
    </div>
  );
}
