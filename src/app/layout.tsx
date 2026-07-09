import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import { profile } from "@/data/content";
import { SITE_URL } from "@/data/site";
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

const title = `${profile.name} — ${profile.role}`;
const description = `${profile.role} based in ${profile.location}, specializing in React, PHP, and REST APIs. Portfolio featuring work experience, skills, and an interactive 3D showcase.`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: title,
    template: `%s — ${profile.name}`,
  },
  description,
  keywords: [
    profile.name,
    "Full Stack Developer",
    "Front-End Developer",
    "React Developer",
    "WordPress Developer",
    "PHP Developer",
    "Jordan Developer",
    "Zarqa",
  ],
  authors: [{ name: profile.name, url: profile.linkedin }],
  creator: profile.name,
  publisher: profile.name,
  applicationName: `${profile.name} Portfolio`,
  formatDetection: { email: false, address: false, telephone: false },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/icon-32.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: `${profile.name} Portfolio`,
    locale: "en_US",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: title }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#05050a",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.fullName,
  alternateName: profile.name,
  jobTitle: profile.role,
  url: SITE_URL,
  email: `mailto:${profile.email}`,
  telephone: profile.phone,
  sameAs: [profile.linkedin],
  address: {
    "@type": "PostalAddress",
    addressLocality: profile.location,
  },
  knowsAbout: ["React", "JavaScript", "PHP", "WordPress", "REST APIs"],
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
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
