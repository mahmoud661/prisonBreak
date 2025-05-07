import Link from "next/link";
import { LucideIcon, BarChart3, Shield, Users, FileText, Settings, Home, AlertTriangle } from "lucide-react";

type NavItem = {
  title: string;
  href: string;
  icon: LucideIcon;
};

const navItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: BarChart3,
  },
  {
    title: "Inmates",
    href: "/inmates",
    icon: Users,
  },
  {
    title: "Security",
    href: "/security",
    icon: Shield,
  },
  {
    title: "Reports",
    href: "/reports",
    icon: FileText,
  },
  {
    title: "Alerts",
    href: "/alerts",
    icon: AlertTriangle,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export default function SideBar() {
  return (
    <aside className="h-screen w-64 fixed left-0 top-0 bg-zinc-900 border-r border-zinc-800 text-zinc-200 shadow-xl shadow-black/30">
      <div className="p-4 border-b border-zinc-800">
        <div className="flex items-center space-x-2">
          <Shield className="w-6 h-6 text-red-600" />
          <h1 className="text-xl font-bold tracking-wider text-red-600">IRON GATE</h1>
        </div>
        <p className="text-xs text-zinc-500 mt-1">Maximum Security Facility</p>
      </div>
      
      <nav className="p-4">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.title}>
              <Link
                href={item.href}
                className="flex items-center space-x-3 px-3 py-2 rounded-md hover:bg-zinc-800 transition-colors group"
              >
                <item.icon className="w-5 h-5 text-zinc-500 group-hover:text-red-500" />
                <span className="group-hover:text-zinc-100">{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="absolute bottom-0 w-full p-4 border-t border-zinc-800">
        <div className="flex items-center space-x-3 px-3 py-2">
          <Home className="w-5 h-5 text-zinc-500" />
          <span className="text-sm text-zinc-400">Back to Home</span>
        </div>
      </div>
    </aside>
  );
}