"use client";

import React from "react";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import OfficersTable from "@/components/dashboard/OfficersTable";

const officersData = [
  { name: "Johnson, R.", username: "johnsonr23", role: "Guard", shift: "Morning", status: "active" },
  { name: "Williams, T.", username: "williamsT", role: "Supervisor", shift: "Morning", status: "active" },
  { name: "Martinez, A.", username: "martinezA45", role: "Guard", shift: "Evening", status: "active" },
  { name: "Roberts, K.", username: "robertsK12", role: "Administrator", shift: "Morning", status: "active" },
  { name: "Thompson, L.", username: "thompsonL", role: "Guard", shift: "Night", status: "inactive" }
];

export default function OfficersPage() {
  return (
    <div className="container mx-auto py-6">
      <DashboardHeader 
        title="Officers Management" 
        subtitle="Staff monitoring and administration" 
      />
      
      <div className="mt-8">
        <OfficersTable officers={officersData} />
      </div>
    </div>
  );
}