"use client";

import React, { useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import FloatingNav from "@/components/FloatingNav";
import Footer from "@/components/Footer";

const ClientDashboard: React.FC = () => {
  const { user, isSignedIn } = useUser();
  const router = useRouter();

  // Redirect to sign-in if not authenticated
  useEffect(() => {
    if (!isSignedIn) {
      router.push("/sign-in");
    }
  }, [isSignedIn, router]);

  if (!isSignedIn) {
    return null; // Prevent rendering until redirect happens
  }

  return (
    <div id="main-content" className="min-h-screen pb-16 flex flex-col bg-[#302e2e] text-[#cf9338] w-full">
      <FloatingNav />
      <div className="flex-grow container pb-14 mx-auto px-4 sm:px-6 py-8 sm:py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="mt-8 sm:mt-16 md:mt-32 text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-6">
            Welcome, {user?.firstName}! 👋
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-6">
            Bullione – Your Gateway to Smart Investments in Africa
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6">🚧 Exciting Changes Ahead! 🚧</p>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6">
            We're building something amazing! Our Client Portal is currently under construction to bring you a seamless, secure, and enhanced investment experience.
          </p>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6">
            Stay tuned as we refine every detail to serve you better.
          </p>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl">
            For any inquiries, reach us via email at support@bullione.com.
          </p>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default ClientDashboard;