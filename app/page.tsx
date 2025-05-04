import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <main className="min-h-screen transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 py-8 md:py-16">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">
            dark
          </h1>
          <ThemeToggle />
        </div>
        Hanuon
      </div>
    </main>
  );
}
