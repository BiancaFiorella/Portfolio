import "./globals.css";

import type { Metadata } from "next";
import { Poppins, Titan_One } from "next/font/google";
import Nav from "./components/nav";
import Footer from "./components/footer";
import clsx from "clsx";

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
  description: "Hello and welcome to my portfolio!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(titanSans.variable, poppins.variable, "antialiased")}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
