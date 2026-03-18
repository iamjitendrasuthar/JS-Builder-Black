import type { Metadata } from "next";
import "./globals.css";

export const metadata = {
  title: "Js Builder",
  description: "Premium Interior Design for Modern Homes",
  icons: {
    icon: "https://cdn-icons-png.flaticon.com/128/5801/5801396.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className="overflow-x-hidden">{children}</body>
    </html>
  );
}
