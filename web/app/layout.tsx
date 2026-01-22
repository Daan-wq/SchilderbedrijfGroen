import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Schildersbedrijf Groen | Vakmanschap in Zwolle",
  description: "Schildersbedrijf Groen in Zwolle: Uw partner voor binnen- en buitenschilderwerk, behangen en glaszetten.",
  metadataBase: new URL("https://schildersbedrijfgroen.net"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased text-foreground bg-background`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
