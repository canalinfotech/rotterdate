import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans'
import "./globals.css";

const geistSans = GeistSans

export const metadata: Metadata = {
  title: 'Rotterdate | Luxury Date Experiences in Rotterdam',
  description: 'Curated, luxurious experiences for discerning couples in Rotterdam. Plan and book your perfect evening with exclusive dining, cruises, and cultural experiences.',
  keywords: ['Rotterdam', 'date night', 'luxury experiences', 'fine dining', 'couples activities'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={geistSans.className}>{children}</body>
    </html>
  )
}
