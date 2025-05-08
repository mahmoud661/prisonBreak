import { ThemeToggle } from "@/components/theme-toggle";
import { Shield } from "lucide-react";

export default function Header() {
  return (
    <div className="flex justify-between items-center mb-16">
      <div className="flex items-center">
        <Shield className="h-8 w-8 text-red-600 mr-2" />
        <h1 className="text-2xl md:text-3xl font-bold text-red-600">
          IRON GATE
        </h1>
      </div>
      <ThemeToggle />
    </div>
  );
}
