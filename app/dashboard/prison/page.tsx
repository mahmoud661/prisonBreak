"use client";

import React from "react";
import DashboardHeader from "@/components/dashboard/DashboardHeader";

export default function PrisonPage() {
  return (
    <div className="container mx-auto py-6">
      <DashboardHeader 
        title="Prison Overview" 
        subtitle="Facility management and infrastructure" 
      />
      
      <div className="mt-8 bg-white dark:bg-zinc-800 rounded-lg border border-zinc-200 dark:border-zinc-700 shadow-sm p-6">
        <h2 className="text-lg font-semibold mb-4">Iron Gate Prison Facility</h2>
        <p className="text-zinc-600 dark:text-zinc-400">
          This page will display information about the prison facility, including building status, maintenance needs, and infrastructure details.
        </p>
      </div>
    </div>
  ); 
}