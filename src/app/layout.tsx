import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PDF Tools Hub - Free Online PDF Editor & Converter",
  description: "Free online PDF tools to merge, split, rotate, and compress PDF files. No registration required. Process PDFs directly in your browser with our secure tools.",
  keywords: "PDF tools, merge PDF, split PDF, rotate PDF, compress PDF, online PDF editor, free PDF converter",
  authors: [{ name: "PDF Tools Hub" }],
  creator: "PDF Tools Hub",
  publisher: "PDF Tools Hub",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://pdf-tools-hub.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "PDF Tools Hub - Free Online PDF Editor & Converter",
    description: "Free online PDF tools to merge, split, rotate, and compress PDF files. No registration required.",
    url: "https://pdf-tools-hub.vercel.app",
    siteName: "PDF Tools Hub",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PDF Tools Hub - Free Online PDF Editor & Converter",
    description: "Free online PDF tools to merge, split, rotate, and compress PDF files. No registration required.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script 
          async 
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6354681495028216"
          crossOrigin="anonymous"
        ></script>
        <Script
          id="adsense-init"
          strategy="afterInteractive"
        >
          {`
            (adsbygoogle = window.adsbygoogle || []).push({});
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
