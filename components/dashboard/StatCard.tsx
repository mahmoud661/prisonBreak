"use client";

import React, { ReactNode } from "react";
import { LucideIcon } from "lucide-react";

interface StatDetail {
  label: string;
  value: string | number;
}

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  iconColor: string;
  details?: StatDetail[];
}

export const StatCard: React.FC<StatCardProps> = ({ 
  title, 
  value, 
  icon: Icon, 
  iconColor,
  details 
}) => {
  return (
    <div className="bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg p-5 shadow-lg hover:shadow-red-900/10 transition-all">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-zinc-600 dark:text-zinc-500 text-sm font-medium mb-1">{title}</p>
          <h3 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">{value}</h3>
        </div>
        <div className={`bg-zinc-100 dark:bg-zinc-700 p-2 rounded-md`}>
          <Icon className={`h-6 w-6 ${iconColor}`} />
        </div>
      </div>
      
      {details && details.length > 0 && (
        <div className="mt-4 flex items-center justify-between">
          {details.map((detail, index) => (
            <div key={index} className="text-xs">
              <span className="text-zinc-600 dark:text-zinc-400">{detail.label}: </span>
              <span className="text-zinc-900 dark:text-zinc-100">{detail.value}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default StatCard;