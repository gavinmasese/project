import type { Metadata } from "next";
import StatsSection from "@/components/StatsSection";
import HeroSection from "@/components/HeroSection";
import WhoWeAreSection from "@/components/WhoWeAreSection";
import ValuePropositionSection from "@/components/ValuePropositionSection";
import ServicesSection from "@/components/ServicesSection";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import FloatingNav from "@/components/FloatingNav";

export const metadata: Metadata = {
  title: "Bullione | Your Gateway to Africa's Golden Future",
  description: "Bullione offers smart investment opportunities across Africa. Discover our services, insights, and testimonials to guide your investment journey.",
  keywords: "Africa investments, bullion, gold, precious metals, financial services, investment opportunities, African markets",
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
  },
};

export default function Home() {
  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-orange-500 text-white px-4 py-2 rounded z-50">Skip to main content</a>
      <main id="main-content" className="w-full">
        <FloatingNav />
        <HeroSection />
        <WhoWeAreSection />
        <ValuePropositionSection />
        <ServicesSection />
        <StatsSection />
        <Testimonials />
        <Footer />
      </main>
    </>
  );
}
