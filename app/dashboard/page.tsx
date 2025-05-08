"use client";

import React from "react";
import { Users, UserCog, DoorClosed } from "lucide-react";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import AlertBanner from "@/components/dashboard/AlertBanner";
import StatCard from "@/components/dashboard/StatCard";
import OfficersTable from "@/components/dashboard/OfficersTable";
import CellsTable from "@/components/dashboard/CellsTable";
import {ICell} from "@/components/dashboard/CellsTable";

const officersData = [
  { name: "Johnson, R.", username: "johnsonr23", role: "Guard", shift: "Morning", status: "active" },
  { name: "Williams, T.", username: "williamsT", role: "Supervisor", shift: "Morning", status: "active" },
  { name: "Martinez, A.", username: "martinezA45", role: "Guard", shift: "Evening", status: "active" },
  { name: "Roberts, K.", username: "robertsK12", role: "Administrator", shift: "Morning", status: "active" },
  { name: "Thompson, L.", username: "thompsonL", role: "Guard", shift: "Night", status: "inactive" }
];

const cellsData = [
  { number: 101, floor: "1-A", officer: "Johnson, R.", capacity: 4, occupancy: 3, status: "normal" },
  { number: 102, floor: "1-A", officer: "Johnson, R.", capacity: 4, occupancy: 4, status: "full" },
  { number: 201, floor: "2-B", officer: "Martinez, A.", capacity: 2, occupancy: 2, status: "full" },
  { number: 301, floor: "3-C", officer: "Thompson, L.", capacity: 1, occupancy: 1, status: "isolation" },
  { number: 405, floor: "4-D", officer: "Williams, T.", capacity: 4, occupancy: 2, status: "normal" }
];

export default function DashboardPage() {
  const handleCellClick = (cell : ICell) => {
    console.log("Cell clicked:", cell);
  };

  return (
    <div className="container mx-auto py-6">
      <DashboardHeader 
        title="Warden Dashboard" 
        subtitle="Prison Break Prison Facility Management" 
      />
      
      <AlertBanner 
        title="ALERT: Cell block B exceeding capacity" 
        message="Prisoner transfer required to maintain safety regulations." 
      />

      {/* Status Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <StatCard 
          title="TOTAL PRISONERS" 
          value="1,342" 
          icon={Users} 
          iconColor="text-red-500" 
          details={[
            { label: "Active", value: "1,320" },
            { label: "Released", value: "22" }
          ]}
        />

        <StatCard 
          title="OFFICERS" 
          value="68" 
          icon={UserCog} 
          iconColor="text-blue-400" 
          details={[
            { label: "", value: "32 on-site" },
            { label: "Shifts", value: "Morning (15), Evening (17)" }
          ]}
        />

        <StatCard 
          title="CELLS STATUS" 
          value="230/250" 
          icon={DoorClosed} 
          iconColor="text-amber-500" 
          details={[
            { label: "", value: "92% occupied" },
            { label: "Free cells", value: "20" }
          ]}
        />
      </div>

      <OfficersTable officers={officersData} />
      
      <CellsTable cells={cellsData} onCellClick={handleCellClick} />
    </div>
  );
}