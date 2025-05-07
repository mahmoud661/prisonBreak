"use client";

import Link from "next/link";
import { LucideIcon, BarChart3, Shield, Users, FileText, Settings, UserCog, Building2, DoorClosed } from "lucide-react";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";

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
    title: "Officers",
    href: "/dashboard/officers",
    icon: UserCog,
  },
  {
    title: "Prisoners",
    href: "/dashboard/prisoners",
    icon: Users,
  },
  {
    title: "Cells",
    href: "/dashboard/cells",
    icon: DoorClosed,
  },
  {
    title: "Prison",
    href: "/dashboard/prison",
    icon: Building2,
  },
  {
    title: "Security",
    href: "/dashboard/security",
    icon: Shield,
  },
  {
    title: "Reports",
    href: "/dashboard/reports",
    icon: FileText,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];

export default function SideBar() {
  const { theme } = useTheme();
  const pathname = usePathname();
  
  return (
    <>
      {/* Mobile navigation overlay - hidden on larger screens */}
      <div className="md:hidden fixed inset-0 bg-black/50 z-30 backdrop-blur-sm hidden" id="mobile-nav-overlay"></div>
      
      {/* Sidebar - different on mobile vs desktop */}
      <aside className="fixed left-0 top-0 h-screen bg-zinc-100 dark:bg-zinc-900 border-r border-zinc-200 dark:border-zinc-800 
        text-zinc-700 dark:text-zinc-200 shadow-xl shadow-black/5 dark:shadow-black/30 z-40 transition-all duration-300
        w-full max-w-[280px] -translate-x-full md:translate-x-0 md:w-64">
        
        <div className="p-4 border-b border-zinc-200 dark:border-zinc-800">
          <div className="flex items-center space-x-2">
            <Shield className="w-6 h-6 text-red-600 flex-shrink-0" />
            <h1 className="text-xl font-bold tracking-wider text-red-600">IRON GATE</h1>
          </div>
          <p className="text-xs text-zinc-500 mt-1">Maximum Security Facility</p>
        </div>
        
        <nav className="p-4">
          <ul className="space-y-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              
              return (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className={`flex items-center space-x-3 px-3 py-2 rounded-md 
                    ${isActive 
                      ? 'bg-red-500/10 text-red-600 dark:text-red-500' 
                      : 'hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400'
                    } transition-colors group`}
                  >
                    <item.icon className={`w-5 h-5 ${isActive ? 'text-red-500' : 'text-zinc-500 group-hover:text-red-500'}`} />
                    <span className={`${isActive ? 'text-red-600 dark:text-red-500' : 'group-hover:text-zinc-900 dark:group-hover:text-zinc-100'}`}>
                      {item.title}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        
        <div className="absolute bottom-0 w-full p-4 border-t border-zinc-200 dark:border-zinc-800">
          <div className="flex items-center justify-between px-3 py-2">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm text-zinc-600 dark:text-zinc-400">Warden View</span>
            </div>
            <div className="text-xs bg-zinc-200 dark:bg-zinc-800 px-2 py-0.5 rounded-full text-zinc-700 dark:text-zinc-300">
              ON-SITE
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile bottom navigation - visible only on small screens */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 z-40">
        <div className="flex justify-around">
          {navItems.slice(0, 5).map((item) => {
            const isActive = pathname === item.href;
            
            return (
              <Link
                key={item.title}
                href={item.href}
                className={`flex flex-col items-center py-2 px-3 ${
                  isActive ? 'text-red-600 dark:text-red-500' : 'text-zinc-600 dark:text-zinc-400'
                }`}
              >
                <item.icon className={`w-5 h-5 ${isActive ? 'text-red-500' : ''}`} />
                <span className="text-xs mt-1">{item.title}</span>
              </Link>
            )
          })}
        </div>
      </div>
    </>
  );
}