import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import { profile } from "@/data/content";
import "./globals.css";

const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "700"],
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mahmoud-ghunaim.dev"),
  title: `${profile.name} — ${profile.role}`,
  description: `${profile.role} specializing in React, REST APIs, and performance optimization. Building interfaces — and exploring 3D on the web.`,
  openGraph: {
    title: `${profile.name} — ${profile.role}`,
    description: `${profile.role} specializing in React, REST APIs, and performance optimization.`,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#05050a] text-[#f2f2f7]">
        {children}
      </body>
    </html>
  );
}
