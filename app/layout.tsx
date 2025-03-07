import type { Metadata } from "next";
import { Inter , IBM_Plex_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

const ibmPlexSerif = IBM_Plex_Serif({
  variable: "--font-ibm-plex-serif",
  weight: ['400','700'],
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Horizon",
  description: "Horizon a Mordern banking solution for everyone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${ibmPlexSerif.variable} antialiased`}>
      <body>
        {children}
      </body>
    </html>
  );
}

