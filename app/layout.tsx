import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const font_Inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lumora",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", font_Inter.variable, "font-sans")}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />

        <main className="flex flex-1 flex-col">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
