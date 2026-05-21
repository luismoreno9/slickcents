import type { Metadata } from "next";
import Script from "next/script";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "SlickCents — Real Money Talk for Real People",
    template: "%s | SlickCents",
  },
  description:
    "Budgeting, investing, side hustles, and building wealth — without the jargon or get-rich-quick nonsense. Personal finance advice from someone who's actually done it.",
  keywords: ["personal finance", "budgeting", "investing", "FIRE", "side hustles", "saving money"],
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "SlickCents — Real Money Talk for Real People",
    description: "Personal finance advice that's honest, practical, and actually useful.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`} translate="no">
      <head>
        <meta name="google" content="notranslate" />
        {/* Google AdSense — site verification & ad serving */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4043278304639919"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className="bg-cream-50 text-bark-900 antialiased font-body min-h-screen flex flex-col notranslate">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
