import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import logo from "../public/clicketpafLogo.webp";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Click et Paf | Solutions Web Innovantes',
  description: 'Click et Paf offre des solutions web innovantes et sur mesure pour votre entreprise. Découvrez nos services de développement web et de marketing digital.',
  keywords: 'Click et Paf, click, et, paf, clicketpaf, clicket, etpaf, clickpaf, click&paf, click&, &paf, développement web, marketing digital, solutions web, France',
  openGraph: {
    title: 'Click et Paf | Solutions Web Innovantes',
    description: 'Click et Paf offre des solutions web innovantes et sur mesure pour votre entreprise. Découvrez nos services de développement web et de marketing digital.',
    url: 'https://clicketpaf.fr',
    siteName: 'Click et Paf',
    images: [
      {
        url: logo.src,
        width: 630,
        height: 630,
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Click et Paf | Solutions Web Innovantes',
    description: 'Click et Paf offre des solutions web innovantes et sur mesure pour votre entreprise. Découvrez nos services de développement web et de marketing digital.',
    images: [logo.src],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
