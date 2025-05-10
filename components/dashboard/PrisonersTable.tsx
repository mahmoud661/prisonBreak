"use client";

import React, { useState, useEffect } from "react";

interface Prisoner {
  id: string;
  number: string;
  name: string;
  crime: string;
  entryDate: string;
  duration: number;
  isReleased: boolean;
  releaseDate: string | null;
  prison_id: string;
  cell_id: string;
}

interface PrisonersTableProps {
  prisoners: Prisoner[];
}

export const PrisonersTable: React.FC<PrisonersTableProps> = ({
  prisoners,
}) => {
  const [crimeFilter, setCrimeFilter] = useState<string>("all");
  const [releaseStatusFilter, setReleaseStatusFilter] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredPrisoners, setFilteredPrisoners] =
    useState<Prisoner[]>(prisoners);

  useEffect(() => {
    const filtered = prisoners.filter((prisoner) => {
      const matchesCrime =
        crimeFilter === "all" ||
        prisoner.crime.toLowerCase() === crimeFilter.toLowerCase();

      const matchesReleaseStatus =
        releaseStatusFilter === "all" ||
        (releaseStatusFilter === "released" && prisoner.isReleased) ||
        (releaseStatusFilter === "incarcerated" && !prisoner.isReleased);

      const matchesSearch =
        searchTerm === "" ||
        prisoner.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        prisoner.number.toLowerCase().includes(searchTerm.toLowerCase());

      return matchesCrime && matchesReleaseStatus && matchesSearch;
    });

    setFilteredPrisoners(filtered);
  }, [prisoners, crimeFilter, releaseStatusFilter, searchTerm]);

  const calculateRemainingTime = (
    entryDate: string,
    duration: number,
    isReleased: boolean
  ): string => {
    if (isReleased) return "Released";

    const entry = new Date(entryDate);
    const releaseDate = new Date(entry);
    releaseDate.setFullYear(releaseDate.getFullYear() + duration);

    const now = new Date();
    const remainingMs = releaseDate.getTime() - now.getTime();

    if (remainingMs <= 0) return "Due for release";

    const remainingDays = Math.floor(remainingMs / (1000 * 60 * 60 * 24));
    const remainingYears = Math.floor(remainingDays / 365);
    const remainingMonths = Math.floor((remainingDays % 365) / 30);

    if (remainingYears > 0) {
      return `${remainingYears}y ${remainingMonths}m`;
    } else {
      return `${remainingMonths}m ${remainingDays % 30}d`;
    }
  };

  return (
    <div className="bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg shadow-lg p-5 mb-8">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
          Prisoners Registry
        </h3>
        <div className="flex items-center">
          <div className="relative">
            <select
              aria-label="Filter by crime"
              value={crimeFilter}
              onChange={(e) => setCrimeFilter(e.target.value)}
              className="bg-zinc-100 dark:bg-zinc-700 border border-zinc-200 dark:border-zinc-600 text-zinc-800 dark:text-zinc-200 text-sm rounded-lg px-3 py-1.5 pr-8 appearance-none focus:outline-none focus:ring-1 focus:ring-red-500"
            >
              <option value="all">All Crimes</option>
              <option value="theft">Theft</option>
              <option value="assault">Assault</option>
              <option value="fraud">Fraud</option>
              <option value="murder">Murder</option>
              <option value="drug offense">Drug Offense</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-zinc-500 dark:text-zinc-400">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
          <div className="relative ml-3">
            <select
              aria-label="Filter by status"
              value={releaseStatusFilter}
              onChange={(e) => setReleaseStatusFilter(e.target.value)}
              className="bg-zinc-100 dark:bg-zinc-700 border border-zinc-200 dark:border-zinc-600 text-zinc-800 dark:text-zinc-200 text-sm rounded-lg px-3 py-1.5 pr-8 appearance-none focus:outline-none focus:ring-1 focus:ring-red-500"
            >
              <option value="all">All Status</option>
              <option value="incarcerated">Incarcerated</option>
              <option value="released">Released</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-zinc-500 dark:text-zinc-400">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
          <div className="relative ml-3">
            <input
              type="text"
              placeholder="Search name or ID..."
              aria-label="Search by name or ID"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-zinc-100 dark:bg-zinc-700 border border-zinc-200 dark:border-zinc-600 text-zinc-800 dark:text-zinc-200 text-sm rounded-lg px-3 py-1.5 w-48 focus:outline-none focus:ring-1 focus:ring-red-500"
            />
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-xs text-zinc-500 dark:text-zinc-500 border-b border-zinc-200 dark:border-zinc-700">
              <th className="pb-3 text-left font-medium">ID</th>
              <th className="pb-3 text-left font-medium">NAME</th>
              <th className="pb-3 text-left font-medium">CRIME</th>
              <th className="pb-3 text-left font-medium">ENTRY DATE</th>
              <th className="pb-3 text-left font-medium">SENTENCE</th>
              <th className="pb-3 text-left font-medium">REMAINING</th>
              <th className="pb-3 text-left font-medium">STATUS</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {filteredPrisoners.map((prisoner) => (
              <tr
                key={prisoner.id}
                className="border-b border-zinc-200/70 dark:border-zinc-700/50 last:border-0"
              >
                <td className="py-3 font-mono text-zinc-600 dark:text-zinc-400">
                  {prisoner.number}
                </td>
                <td className="py-3 text-zinc-900 dark:text-zinc-300">
                  {prisoner.name}
                </td>
                <td className="py-3 text-zinc-900 dark:text-zinc-300">
                  {prisoner.crime}
                </td>
                <td className="py-3 text-zinc-600 dark:text-zinc-400">
                  {new Date(prisoner.entryDate).toLocaleDateString()}
                </td>
                <td className="py-3 text-zinc-600 dark:text-zinc-400">
                  {prisoner.duration} years
                </td>
                <td className="py-3 text-zinc-600 dark:text-zinc-400">
                  {calculateRemainingTime(
                    prisoner.entryDate,
                    prisoner.duration,
                    prisoner.isReleased
                  )}
                </td>
                <td className="py-3">
                  <span
                    className={`px-2 py-0.5 rounded-full text-xs ${
                      !prisoner.isReleased
                        ? "bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-400"
                        : "bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400"
                    }`}
                  >
                    {prisoner.isReleased ? "RELEASED" : "INCARCERATED"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PrisonersTable;
