import type { Metadata } from "next";
import {Space_Mono } from "next/font/google";
import "./globals.css";

const space_Mono = Space_Mono({
  subsets: ["latin"],
  weight: "700"
});

export const metadata: Metadata = {
  title: "Tip Calculator",
  description: "Michael Heckerman",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={space_Mono.className}>{children}</body>
    </html>
  );
}
