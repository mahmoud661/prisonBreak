import { ThemeToggle } from "@/components/theme-toggle";
import Link from "next/link";
import { Shield } from "lucide-react";

export default function Header() {
  return (
    <div className="flex justify-between items-center mb-16">
      <Link href="/" className="flex items-center">
        <Shield className="h-8 w-8 text-red-600 mr-2" />
        <h1 className="text-2xl md:text-3xl font-bold text-red-600">
          PRISON BREAK 
        </h1>
      </Link>
      <ThemeToggle />
    </div>
  );
}
