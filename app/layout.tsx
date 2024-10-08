import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "GMP Temparature Dashboard",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex h-screen`}>
        <Sidebar />
        <div className="flex-grow">
          <Topbar />
          {children}
        </div>
      </body>
    </html>
  );
}
