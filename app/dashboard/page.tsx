import React from "react";
import { Shield, Users, AlertTriangle, Lock, Clock, Calendar } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="container mx-auto py-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-zinc-100 mb-2">Security Dashboard</h1>
        <p className="text-zinc-400">System status and alerts for Iron Gate Maximum Security Prison</p>
      </div>
      
      {/* Alert Banner */}
      <div className="bg-red-900/20 border border-red-700 rounded-md p-4 mb-8 flex items-center space-x-3">
        <AlertTriangle className="h-6 w-6 text-red-500" />
        <div>
          <h3 className="font-semibold text-red-500">ALERT: Perimeter breach detected in Sector 7</h3>
          <p className="text-sm text-zinc-400">Security team dispatched at 14:23. Lockdown protocol initiated.</p>
        </div>
      </div>

      {/* Status Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {/* Inmate Count Card */}
        <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-5 shadow-lg hover:shadow-red-900/10 transition-all">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-zinc-500 text-sm font-medium mb-1">TOTAL INMATES</p>
              <h3 className="text-3xl font-bold text-zinc-100">1,342</h3>
            </div>
            <div className="bg-zinc-700 p-2 rounded-md">
              <Users className="h-6 w-6 text-red-500" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-xs">
            <span className="text-red-500 bg-red-900/20 px-2 py-0.5 rounded">+7 new</span>
            <span className="ml-2 text-zinc-500">since last week</span>
          </div>
        </div>

        {/* Security Incidents Card */}
        <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-5 shadow-lg hover:shadow-red-900/10 transition-all">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-zinc-500 text-sm font-medium mb-1">SECURITY INCIDENTS</p>
              <h3 className="text-3xl font-bold text-zinc-100">24</h3>
            </div>
            <div className="bg-zinc-700 p-2 rounded-md">
              <Shield className="h-6 w-6 text-amber-500" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-xs">
            <span className="text-amber-500 bg-amber-900/20 px-2 py-0.5 rounded">Level 2</span>
            <span className="ml-2 text-zinc-500">current threat level</span>
          </div>
        </div>

        {/* Lockdown Status Card */}
        <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-5 shadow-lg hover:shadow-red-900/10 transition-all">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-zinc-500 text-sm font-medium mb-1">LOCKDOWN STATUS</p>
              <h3 className="text-xl font-bold text-red-500">PARTIAL LOCKDOWN</h3>
            </div>
            <div className="bg-zinc-700 p-2 rounded-md">
              <Lock className="h-6 w-6 text-red-500" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-xs">
            <span className="text-zinc-300">Sectors: </span>
            <span className="ml-1 text-red-500">B, C, F</span>
            <span className="ml-2 text-zinc-500">in lockdown</span>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-zinc-800 border border-zinc-700 rounded-lg shadow-lg p-5 mb-8">
        <h3 className="text-xl font-semibold text-zinc-100 mb-4">Recent Activity</h3>
        <div className="space-y-4">
          {[
            { time: "15:42", event: "Cell block B-7 inspection completed", severity: "normal" },
            { time: "14:23", event: "Perimeter breach alert in Sector 7", severity: "critical" },
            { time: "13:50", event: "Visitor checkpoint processing delay", severity: "warning" },
            { time: "12:30", event: "Shift change: Night guard rotation started", severity: "normal" },
            { time: "11:15", event: "Contraband found in Cell A-103", severity: "warning" },
          ].map((activity, index) => (
            <div key={index} className="flex items-center border-b border-zinc-700 pb-3 last:border-0 last:pb-0">
              <div className={`h-2 w-2 rounded-full mr-3 ${
                activity.severity === "critical" ? "bg-red-500" : 
                activity.severity === "warning" ? "bg-amber-500" : "bg-green-500"
              }`} />
              <div className="flex-1">
                <p className="text-sm text-zinc-300">{activity.event}</p>
              </div>
              <div className="flex items-center text-zinc-500 text-xs">
                <Clock className="h-3 w-3 mr-1" />
                {activity.time}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scheduled Transfers */}
      <div className="bg-zinc-800 border border-zinc-700 rounded-lg shadow-lg p-5">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-zinc-100">Scheduled Transfers</h3>
          <div className="flex items-center text-xs text-zinc-500">
            <Calendar className="h-3 w-3 mr-1" />
            Today, May 7, 2025
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-xs text-zinc-500 border-b border-zinc-700">
                <th className="pb-2 text-left font-medium">INMATE ID</th>
                <th className="pb-2 text-left font-medium">NAME</th>
                <th className="pb-2 text-left font-medium">FROM</th>
                <th className="pb-2 text-left font-medium">TO</th>
                <th className="pb-2 text-left font-medium">STATUS</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {[
                { id: "I-7734", name: "Reynolds, M.", from: "Cell Block C", to: "Medical Ward", status: "scheduled" },
                { id: "I-9932", name: "Daniels, J.", from: "Isolation", to: "Cell Block D", status: "in progress" },
                { id: "I-6221", name: "Morrison, F.", from: "Cell Block A", to: "Courtroom", status: "completed" },
              ].map((transfer, index) => (
                <tr key={index} className="border-b border-zinc-700/50 last:border-0">
                  <td className="py-3 font-mono text-zinc-400">{transfer.id}</td>
                  <td className="py-3 text-zinc-300">{transfer.name}</td>
                  <td className="py-3 text-zinc-400">{transfer.from}</td>
                  <td className="py-3 text-zinc-400">{transfer.to}</td>
                  <td className="py-3">
                    <span className={`px-2 py-0.5 rounded text-xs ${
                      transfer.status === "scheduled" ? "bg-blue-900/20 text-blue-400" : 
                      transfer.status === "in progress" ? "bg-amber-900/20 text-amber-400" : 
                      "bg-green-900/20 text-green-400"
                    }`}>
                      {transfer.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}