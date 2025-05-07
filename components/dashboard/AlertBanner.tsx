"use client";

import React from "react";
import { AlertTriangle } from "lucide-react";

interface AlertBannerProps {
  title: string;
  message: string;
}

export const AlertBanner: React.FC<AlertBannerProps> = ({ title, message }) => {
  return (
    <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 rounded-md p-4 mb-8 flex items-center space-x-3">
      <AlertTriangle className="h-6 w-6 text-red-500" />
      <div>
        <h3 className="font-semibold text-red-600 dark:text-red-500">{title}</h3>
        <p className="text-sm text-red-600/70 dark:text-zinc-400">{message}</p>
      </div>
    </div>
  );
};

export default AlertBanner;