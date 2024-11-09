import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import config from "@/lib/config";
import { GoogleTagManager } from "@next/third-parties/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import Head from "next/head";
import Script from "next/script";
import GoogleAdsense from "@/components/GoogleAdsense";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(config.SiteUrl),

  openGraph: {
    title: config.SiteName,
    description: config.Description,
    type: "website",
    url: config.SiteUrl,
    siteName: config.SiteName,
    locale: "hi_IN",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  alternates: {
    types: {
      "application/rss+xml": config.rss,
    },
  },
  applicationName: config.SiteName,

  appleWebApp: {
    title: config.Author,
    statusBarStyle: "default",
    capable: true,
  },
  verification: {
    google: config.Google,
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        type: "image/x-icon",
      },
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    shortcut: [
      {
        url: "/favicon.ico",
        type: "image/x-icon",
      },
    ],
    apple: [
      {
        url: "/apple-icon-57x57.png",
        sizes: "57x57",
        type: "image/png",
      },
      {
        url: "/apple-icon-60x60.png",
        sizes: "60x60",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GoogleAdsense pId={"5591515314789878"} />
        <GoogleTagManager gtmId="GTM-K5BDFSNX" />
        <GoogleAnalytics gaId="G-LKPVH58GC4" />
        <NextTopLoader height={3} color="#000000" showSpinner={false} />
        {children}
      </body>
    </html>
  );
}
