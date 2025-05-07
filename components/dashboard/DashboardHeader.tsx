import React from "react";

interface DashboardHeaderProps {
  title: string;
  subtitle: string;
}

export const DashboardHeader: React.FC<DashboardHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold text-zinc-100 mb-2">{title}</h1>
      <p className="text-zinc-400">{subtitle}</p>
    </div>
  );
};

export default DashboardHeader;