import React from "react";

interface DashboardHeaderProps {
  title: string;
  subtitle: string;
}

export const DashboardHeader: React.FC<DashboardHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold dark:text-zinc-100 text-zinc-950 mb-2">{title}</h1>
      <p className="dark:text-zinc-400 text-zinc-500">{subtitle}</p>
    </div>
  );
};

export default DashboardHeader;