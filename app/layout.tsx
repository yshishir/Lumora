import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Draftbit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        dmSans.variable,
        "font-sans",
      )}
    >
      <body className="min-h-full flex flex-col bg-[#E8EDF2]">
        <Navbar />

        <main className="flex flex-1 flex-col">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
