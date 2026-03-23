import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import WhatsAppWidget from "@/utils/WhatsAppWidget";
import { Analytics } from '@vercel/analytics/next';

export const metadata = {
  title: "JS Builder",
  description: "Premium Interior Design for Modern Homes",
  icons: {
    icon: "https://framerusercontent.com/sites/icons/default-favicon-dark.v1.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className="overflow-x-hidden bg-[#141414]">
        <Navbar />
        <main className="min-h-screen">
          {children} <WhatsAppWidget />
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
