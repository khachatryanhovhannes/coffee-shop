import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import { Footer, Nav } from "@/components";

const urbanist = Urbanist({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SipSpot Café",
  description:
    "At SipSpot Café, we believe that every great day starts with a perfect cup of coffee.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="description"
          content="At SipSpot Café, we believe that every great day starts with a perfect cup of coffee."
        />
        <meta
          name="author"
          content="Hovhannes Khachatryan & Gayane Harutyunyan"
        />
        <meta property="og:title" content="SipSpot Café" />
        <meta
          property="og:description"
          content="At SipSpot Café, we believe that every great day starts with a perfect cup of coffee."
        />
        <meta
          property="og:image"
          content="https://japanesecoffeeco.com/cdn/shop/articles/Caffeine_and_Coffee_1.jpg"
        />
        <meta property="og:url" content="https://sipspot-cafe.netlify.app/" />
      </head>
      <body className={urbanist.className}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
