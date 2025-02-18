import type { Metadata } from "next";

import localFont from "next/font/local";
import "./globals.css";
import Footer from "./components/layout/Footer";

const helvetica = localFont({
  src: [
    {
      path: "../public/fonts/Helvetica.ttf",
      weight: "400",
    },
    {
      path: "../public/fonts/Helvetica-Bold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-helvetica",
});

const kugile = localFont({
  src: [
    {
      path: "../public/fonts/Kugile.ttf",
      weight: "400",
    },
  ],
  variable: "--font-kugile",
});

export const metadata: Metadata = {
  title: "Harmoni",
  description: "Furniture store website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${helvetica.variable} ${kugile.variable}   antialiased `}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
