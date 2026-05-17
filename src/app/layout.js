import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "./components/lib/config.";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = siteConfig.baseUrl

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "JG University",
    "UGC recognized university",
    "Best university in Ahmedabad",
    "Top university in Gujarat",
  ],
  authors: [{ name: "Sanober Yousuf" }, { name: "Debasis Sabat" }],
  openGraph: {
    title: "JG University - The Demo Project",
    description:
      "Discover the creative minds behind your dream spaces at JG University. Explore our talented design team and their innovative projects that bring your vision to life.",
    url: siteUrl,
    type: "website",
    siteName: "JGDemo",
    images: [
      {
        url: `${siteUrl}/assets/navbar - 1.svg`, // ✅ Absolute URL
        width: 1200,
        height: 630,
        alt: "Interio Design Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JG University - The Demo Project",
    description:
      "Discover the creative minds behind your dream spaces at JG University. Explore our talented design team and their innovative projects that bring your vision to life.",
    images: [`${siteUrl} /assets/navbar - 1.svg`], // ✅ Absolute URL
  },
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h - full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
