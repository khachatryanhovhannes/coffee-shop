import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import { Footer, Nav } from "@/components";

const urbanist = Urbanist({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Coffee Shop",
  description:
    "At Coffee Shop, we believe that every great day starts with a perfect cup of coffee.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
