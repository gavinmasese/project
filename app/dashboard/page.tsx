import React from "react";
import type { Metadata } from "next";
import ClientDashboard from "./ClientDashboard";

export const metadata: Metadata = {
  title: "Dashboard | Bullione",
  description: "Access your dashboard at Bullione – Your Gateway to Smart Investments in Africa. Explore your investment opportunities and manage your assets securely.",
  keywords: "dashboard, investments, Africa, portfolio management, Bullione",
  openGraph: {
    title: "Dashboard | Bullione",
    description: "Access your dashboard at Bullione – Your Gateway to Smart Investments in Africa. Explore your investment opportunities and manage your assets securely.",
    url: "https://bullione.africa/dashboard",
    siteName: "Bullione",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dashboard | Bullione",
    description: "Access your dashboard at Bullione – Your Gateway to Smart Investments in Africa. Explore your investment opportunities and manage your assets securely.",
    images: ["/images/logo.png"],
  },
};

const DashboardPage: React.FC = () => {
  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-orange-500 text-white px-4 py-2 rounded z-50">Skip to main content</a>
      <ClientDashboard />
    </>
  );
};

export default DashboardPage;
