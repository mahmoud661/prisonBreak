"use client";

import React from "react";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import { PrisonersTable } from "@/components/dashboard/PrisonersTable";

// Sample prisoner data for testing
const prisonersData = [
  {
    id: "pr1001",
    number: "P1001",
    name: "John Doe",
    crime: "Theft",
    entryDate: "2023-01-10",
    duration: 5,
    isReleased: false,
    releaseDate: null,
    prison_id: "p1",
    cell_id: "c1",
  },
  {
    id: "pr1002",
    number: "P1002",
    name: "Richard Miles",
    crime: "Fraud",
    entryDate: "2022-06-15",
    duration: 8,
    isReleased: false,
    releaseDate: null,
    prison_id: "p1",
    cell_id: "c2",
  },
  {
    id: "pr1003",
    number: "P1003",
    name: "Michael Johnson",
    crime: "Assault",
    entryDate: "2021-11-22",
    duration: 3,
    isReleased: false,
    releaseDate: null,
    prison_id: "p1",
    cell_id: "c1",
  },
  {
    id: "pr1004",
    number: "P1004",
    name: "Sarah Williams",
    crime: "Drug Offense",
    entryDate: "2022-03-18",
    duration: 2,
    isReleased: true,
    releaseDate: "2024-03-18",
    prison_id: "p1",
    cell_id: "c3",
  },
  {
    id: "pr1005",
    number: "P1005",
    name: "Robert Brown",
    crime: "Murder",
    entryDate: "2020-08-05",
    duration: 25,
    isReleased: false,
    releaseDate: null,
    prison_id: "p1",
    cell_id: "c4",
  },
  {
    id: "pr1006",
    number: "P1006",
    name: "David Wilson",
    crime: "Theft",
    entryDate: "2024-01-30",
    duration: 1,
    isReleased: false,
    releaseDate: null,
    prison_id: "p1",
    cell_id: "c2",
  },
  {
    id: "pr1007",
    number: "P1007",
    name: "Jennifer Lee",
    crime: "Fraud",
    entryDate: "2021-05-12",
    duration: 4,
    isReleased: true,
    releaseDate: "2025-01-15",
    prison_id: "p1",
    cell_id: "c3",
  },
  {
    id: "pr1008",
    number: "P1008",
    name: "Kevin Harris",
    crime: "Assault",
    entryDate: "2022-11-08",
    duration: 6,
    isReleased: false,
    releaseDate: null,
    prison_id: "p1",
    cell_id: "c4",
  },
];

export default function PrisonersPage() {
  return (
    <div className="container mx-auto py-6">
      <DashboardHeader
        title="Prisoners Management"
        subtitle="Inmate monitoring and records"
      />

      <PrisonersTable prisoners={prisonersData} />
    </div>
  );
}
