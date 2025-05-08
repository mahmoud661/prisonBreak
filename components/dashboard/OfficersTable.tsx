"use client";

import React, { useState, useEffect } from "react";

interface Officer {
  name: string;
  username: string;
  role: string;
  shift: string;
  status: string;
}

interface OfficersTableProps {
  officers: Officer[];
}

export const OfficersTable: React.FC<OfficersTableProps> = ({ officers }) => {
  const [shiftFilter, setShiftFilter] = useState<string>("all");
  const [roleFilter, setRoleFilter] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredOfficers, setFilteredOfficers] = useState<Officer[]>(officers);

  useEffect(() => {
    // Apply all filters
    const filtered = officers.filter((officer) => {
      // Apply shift filter
      const matchesShift = shiftFilter === "all" || officer.shift.toLowerCase() === shiftFilter;
      
      // Apply role filter
      const matchesRole = roleFilter === "all" || officer.role.toLowerCase() === roleFilter;
      
      // Apply search term filter (case insensitive)
      const matchesSearch = searchTerm === "" || 
        officer.name.toLowerCase().includes(searchTerm.toLowerCase());
      
      return matchesShift && matchesRole && matchesSearch;
    });
    
    setFilteredOfficers(filtered);
  }, [officers, shiftFilter, roleFilter, searchTerm]);

  return (
    <div className="bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg shadow-lg p-5 mb-8">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Officers On-Site</h3>
        <div className="flex items-center">
          <div className="relative">
            <select 
              aria-label="Filter by shift" 
              value={shiftFilter}
              onChange={(e) => setShiftFilter(e.target.value)}
              className="bg-zinc-100 dark:bg-zinc-700 border border-zinc-200 dark:border-zinc-600 text-zinc-800 dark:text-zinc-200 text-sm rounded-lg px-3 py-1.5 pr-8 appearance-none focus:outline-none focus:ring-1 focus:ring-red-500"
            >
              <option value="all">All Shifts</option>
              <option value="morning">Morning</option>
              <option value="evening">Evening</option>
              <option value="night">Night</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-zinc-500 dark:text-zinc-400">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </div>
          </div>
          <div className="relative ml-3">
            <select 
              aria-label="Filter by role" 
              value={roleFilter}
              onChange={(e) => setRoleFilter(e.target.value)}
              className="bg-zinc-100 dark:bg-zinc-700 border border-zinc-200 dark:border-zinc-600 text-zinc-800 dark:text-zinc-200 text-sm rounded-lg px-3 py-1.5 pr-8 appearance-none focus:outline-none focus:ring-1 focus:ring-red-500"
            >
              <option value="all">All Roles</option>
              <option value="guard">Guard</option>
              <option value="supervisor">Supervisor</option>
              <option value="admin">Administrator</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-zinc-500 dark:text-zinc-400">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </div>
          </div>
          <div className="relative ml-3">
            <input 
              type="text" 
              placeholder="Search name..." 
              aria-label="Search by name" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-zinc-100 dark:bg-zinc-700 border border-zinc-200 dark:border-zinc-600 text-zinc-800 dark:text-zinc-200 text-sm rounded-lg px-3 py-1.5 w-40 focus:outline-none focus:ring-1 focus:ring-red-500" 
            />
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-xs text-zinc-500 dark:text-zinc-500 border-b border-zinc-200 dark:border-zinc-700">
              <th className="pb-3 text-left font-medium">NAME</th>
              <th className="pb-3 text-left font-medium">USERNAME</th>
              <th className="pb-3 text-left font-medium">ROLE</th>
              <th className="pb-3 text-left font-medium">SHIFT</th>
              <th className="pb-3 text-left font-medium">STATUS</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {filteredOfficers.map((officer, index) => (
              <tr key={index} className="border-b border-zinc-200/70 dark:border-zinc-700/50 last:border-0">
                <td className="py-3 text-zinc-900 dark:text-zinc-300">{officer.name}</td>
                <td className="py-3 font-mono text-zinc-600 dark:text-zinc-400">{officer.username}</td>
                <td className="py-3 text-zinc-900 dark:text-zinc-300">{officer.role}</td>
                <td className="py-3 text-zinc-600 dark:text-zinc-400">{officer.shift}</td>
                <td className="py-3">
                  <span className={`px-2 py-0.5 rounded-full text-xs ${
                    officer.status === "active" 
                      ? "bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400" 
                      : "bg-zinc-100 dark:bg-zinc-700/50 text-zinc-500 dark:text-zinc-400"
                  }`}>
                    {officer.status === "active" ? "ON-SITE" : "OFF-SITE"}
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

export default OfficersTable;