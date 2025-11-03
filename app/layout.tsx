import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bullione | Your Gateway to Africa's Golden Future",
  description: "Bullione offers smart investment opportunities across Africa. Discover our services, insights, and testimonials to guide your investment journey.",
  keywords: "Africa investments, bullion, gold, precious metals, financial services, investment opportunities, African markets",
  authors: [{ name: "Bullione Team" }],
  creator: "Bullione",
  publisher: "Bullione",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://bullione.africa"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Bullione | Your Gateway to Africa's Golden Future",
    description: "Bullione offers smart investment opportunities across Africa. Discover our services, insights, and testimonials to guide your investment journey.",
    url: "https://bullione.africa",
    siteName: "Bullione",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Bullione Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bullione | Your Gateway to Africa's Golden Future",
    description: "Bullione offers smart investment opportunities across Africa. Discover our services, insights, and testimonials to guide your investment journey.",
    images: ["/images/logo.png"],
    creator: "@bullione",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className={inter.className}>
        <ClerkProvider>{children}</ClerkProvider>
      </body>
    </html>
  );
}
