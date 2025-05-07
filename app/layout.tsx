import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

// Using Inter for legibility in the prison management interface
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Iron Gate Prison Management System",
  description: "Maximum Security Prison Management System",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
