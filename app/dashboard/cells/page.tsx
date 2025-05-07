"use client";

import React from "react";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import CellsTable from "@/components/dashboard/CellsTable";

const cellsData = [
  { number: 101, floor: "1-A", officer: "Johnson, R.", capacity: 4, occupancy: 3, status: "normal" },
  { number: 102, floor: "1-A", officer: "Johnson, R.", capacity: 4, occupancy: 4, status: "full" },
  { number: 201, floor: "2-B", officer: "Martinez, A.", capacity: 2, occupancy: 2, status: "full" },
  { number: 301, floor: "3-C", officer: "Thompson, L.", capacity: 1, occupancy: 1, status: "isolation" },
  { number: 405, floor: "4-D", officer: "Williams, T.", capacity: 4, occupancy: 2, status: "normal" }
];

export default function CellsPage() {
  const handleCellClick = (cell: any) => {
    console.log("Cell clicked:", cell);
  };

  return (
    <div className="container mx-auto py-6">
      <DashboardHeader 
        title="Cell Management" 
        subtitle="Prison cells monitoring and allocation" 
      />
      
      <div className="mt-8">
        <CellsTable cells={cellsData} onCellClick={handleCellClick} />
      </div>
    </div>
  );
} 