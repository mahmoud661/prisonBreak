"use client";

import React from "react";
import DashboardHeader from "@/components/dashboard/DashboardHeader";

export default function ReportsPage() {
  return (
    <div className="container mx-auto py-6">
      <DashboardHeader 
        title="Reports & Analytics" 
        subtitle="Comprehensive reporting and data analysis" 
      />
      
      <div className="mt-8 bg-white dark:bg-zinc-800 rounded-lg border border-zinc-200 dark:border-zinc-700 shadow-sm p-6">
        <h2 className="text-lg font-semibold mb-4">Report Dashboard</h2>
        <p className="text-zinc-600 dark:text-zinc-400">
          This page will display various reports and analytics about prison operations, incidents, and statistics.
        </p>
      </div>
    </div>
  );
} 