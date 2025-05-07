"use client";

import React from "react";
import { Calendar } from "lucide-react";

export interface ICell {
  number: number;
  floor: string;
  officer: string;
  capacity: number;
  occupancy: number;
  status: string;
}

interface CellsTableProps {
  cells: ICell[];
  onCellClick?: (cell: ICell) => void;
}

export const CellsTable: React.FC<CellsTableProps> = ({ cells, onCellClick }) => {
  return (
    <div className="bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg shadow-lg p-5">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Cell Occupancy</h3>
        <div className="flex items-center text-xs text-zinc-600 dark:text-zinc-500">
          <Calendar className="h-3 w-3 mr-1" />
          Today, May 7, 2025
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-xs text-zinc-500 dark:text-zinc-500 border-b border-zinc-200 dark:border-zinc-700">
              <th className="pb-3 text-left font-medium">CELL #</th>
              <th className="pb-3 text-left font-medium">FLOOR</th>
              <th className="pb-3 text-left font-medium">SECURITY OFFICER</th>
              <th className="pb-3 text-left font-medium">CAPACITY</th>
              <th className="pb-3 text-left font-medium">OCCUPANCY</th>
              <th className="pb-3 text-left font-medium">STATUS</th>
              <th className="pb-3 text-left font-medium">ACTIONS</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {cells.map((cell, index) => (
              <tr 
                key={index} 
                className="border-b border-zinc-200/70 dark:border-zinc-700/50 last:border-0 hover:bg-zinc-50 dark:hover:bg-zinc-700/20 cursor-pointer"
                onClick={() => onCellClick && onCellClick(cell)}
              >
                <td className="py-3 font-mono text-zinc-900 dark:text-zinc-300">{cell.number}</td>
                <td className="py-3 text-zinc-600 dark:text-zinc-400">{cell.floor}</td>
                <td className="py-3 text-zinc-900 dark:text-zinc-300">{cell.officer}</td>
                <td className="py-3 text-zinc-600 dark:text-zinc-400">{cell.capacity}</td>
                <td className="py-3 text-zinc-900 dark:text-zinc-300">{cell.occupancy}</td>
                <td className="py-3">
                  <span className={`px-2 py-0.5 rounded text-xs ${
                    cell.status === "full" ? "bg-amber-100 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400" : 
                    cell.status === "isolation" ? "bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-400" : 
                    "bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400"
                  }`}>
                    {cell.status}
                  </span>
                </td>
                <td className="py-3">
                  <button 
                    className="text-xs text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-700 dark:hover:bg-zinc-600 px-3 py-1 rounded transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      onCellClick && onCellClick(cell);
                    }}
                    aria-label={`View details for cell ${cell.number}`}
                  >
                    Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CellsTable;