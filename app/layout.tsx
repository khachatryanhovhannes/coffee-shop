import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import { Footer, Nav } from "@/components";
import Head from "next/head";

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
      <Head>
        <Head>
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
          <meta property="og:image" content="https://i.pinimg.com/originals/71/1b/3e/711b3edbd2d17734549705a2a54a7d50.jpg" />
          <meta
            property="og:url"
            content="https://coffee-shop-h.netlify.app/"
          />
        </Head>
      </Head>
      <body className={urbanist.className}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
