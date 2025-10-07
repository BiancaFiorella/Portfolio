import "./globals.css";

import type { Metadata } from "next";
import { Poppins, Titan_One } from "next/font/google";

const titanSans = Titan_One({
  variable: "--font-titan-one",
  subsets: ["latin"],
  weight: "400"
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  title: "Portfolio | Bianca Fiorella",
  description: "Hello welcome to my portfolio website!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${titanSans.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
