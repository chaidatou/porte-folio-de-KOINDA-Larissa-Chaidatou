import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import { config } from "@fortawesome/fontawesome-svg-core";
import CursorTrail from "@/components/CursorTrail";
import Nav from "@/components/Nav";
import FloatingProfile from "@/components/FloatingProfile";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./globals.css";

config.autoAddCss = false;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
});

const siteUrl = "https://porte-folio-de-koinda-larissa-chaid.vercel.app";
const siteTitle =
  "Larissa Koinda — Audit Sécurité & Pentest pour Startups et Entreprises";
const siteDescription =
  "Cabinet de cybersécurité spécialisé audit, pentest et sécurisation de serveurs. Nous protégeons les startups et entreprises. Consultation gratuite. Alger & remote.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Larissa Chaidatou Koinda",
  },
  description: siteDescription,
  keywords: [
    "Larissa Chaidatou Koinda",
    "Larissa Koinda",
    "analyste en cybersécurité",
    "cybersecurity analyst",
    "CCNA",
    "CEH",
    "Alger",
    "Algérie",
    "portfolio cybersécurité",
    "pentest",
    "SOC",
    "audit sécurité startup",
    "sécurisation serveur",
    "cabinet cybersécurité",
    "pentest startup",
  ],
  authors: [{ name: "Larissa Chaidatou Koinda" }],
  creator: "Larissa Chaidatou Koinda",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    google: "JREuvTpdooasTWHEDiKhtRDyQoiaD2DU68lOi4EthCU",
  },
  openGraph: {
    type: "profile",
    firstName: "Larissa Chaidatou",
    lastName: "Koinda",
    url: siteUrl,
    siteName: "Larissa Chaidatou Koinda — Portfolio",
    title: siteTitle,
    description: siteDescription,
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0a0714]">
        <CursorTrail />
        <Nav />
        <FloatingProfile />
        {children}
      </body>
    </html>
  );
}
