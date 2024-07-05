import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StartCanvas from "@/components/main/StartBackground";
import Navbar from "@/components/main/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Space Portfolio",
  description: "this is my portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}>
        <StartCanvas/>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
