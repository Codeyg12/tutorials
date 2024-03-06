import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Body from "@/components/Body/body";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Leet Clone",
  description: "Web application to clone LeetCode",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Body className={inter.className} children={children} />
    </html>
  );
}
