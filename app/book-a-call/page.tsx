"use client";

import React, { useState } from "react";
import type { Metadata } from "next";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Footer from "@/components/Footer";
import emailjs from "emailjs-com";

export const metadata: Metadata = {
  title: "Book a Call | Bullione",
  description: "Book a call with our experts at Bullione to discuss personalized investment opportunities and expert advice.",
  keywords: "book a call, consultation, investment advice, Bullione, Africa investments",
  openGraph: {
    title: "Book a Call | Bullione",
    description: "Book a call with our experts at Bullione to discuss personalized investment opportunities and expert advice.",
    url: "https://bullione.africa/book-a-call",
    siteName: "Bullione",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Book a Call | Bullione",
    description: "Book a call with our experts at Bullione to discuss personalized investment opportunities and expert advice.",
    images: ["/images/logo.png"],
  },
};

// ---------------------------------------------------
// 1) Type Definitions
// ---------------------------------------------------
interface FormData {
  fullName: string;
  email: string;
  phone: string;
  resume: File | null;
  linkedIn: string;
  comments: string;
}

// ---------------------------------------------------
// 2) BookACall Component
// ---------------------------------------------------
const BookACall: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    resume: null,
    linkedIn: "",
    comments: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const router = useRouter();

  // Handle text and textarea changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prevData: FormData) => ({ ...prevData, [name]: value }));

    // Real-time validation
    const newErrors: Record<string, string> = { ...errors };
    if (name === 'fullName' && value.trim() === '') {
      newErrors.fullName = 'Full name is required';
    } else if (name === 'fullName') {
      delete newErrors.fullName;
    }
    if (name === 'email' && !/\S+@\S+\.\S+/.test(value)) {
      newErrors.email = 'Please enter a valid email';
    } else if (name === 'email') {
      delete newErrors.email;
    }
    if (name === 'phone' && value.trim() === '') {
      newErrors.phone = 'Phone number is required';
    } else if (name === 'phone') {
      delete newErrors.phone;
    }
    if (name === 'linkedIn' && value && !value.match(/^https?:\/\/(www\.)?linkedin\.com\/.*/)) {
      newErrors.linkedIn = 'Please enter a valid LinkedIn URL';
    } else if (name === 'linkedIn') {
      delete newErrors.linkedIn;
    }
    setErrors(newErrors);
  };

  // Handle file input change
  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setFormData((prevData) => ({
      ...prevData,
      resume: e.target.files ? e.target.files[0] : null,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      linkedIn: formData.linkedIn || "Not provided",
      comments: formData.comments || "No comments",
    };

    try {
      const response = await emailjs.send(
        "service_5aztpv8", 
        "template_bookacall", 
        templateParams,
        "dohXkU4ulaG9D_Sue"
      );
      console.log("Email sent successfully!", response);
      alert("Thank you! We'll contact you soon.");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        resume: null,
        linkedIn: "",
        comments: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Oops! Something went wrong. Please try again.");
    }
    setLoading(false);
  };

  // Framer Motion variants for smooth animations
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.2, duration: 0.6 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-orange-500 text-white px-4 py-2 rounded z-50">Skip to main content</a>
      <motion.div
        id="main-content"
        className="min-h-screen bg-[#333333] flex flex-col items-center justify-center p-4 sm:p-6 w-full"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1
          variants={itemVariants}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-500 mb-4 text-center"
        >
          Book a Call with Our Experts
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg text-gray-300 mb-8 text-center"
        >
          Speak with our experts and get personalized advice on your investment opportunities.
        </motion.p>
        <motion.div
          variants={itemVariants}
          className="w-full max-w-lg bg-gray-800 p-4 sm:p-6 md:p-8 rounded-lg shadow-lg mb-6"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="fullName"
                className="block text-orange-500 font-semibold mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-gray-700 text-orange-500 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
                aria-describedby={errors.fullName ? "fullName-error" : undefined}
              />
              {errors.fullName && <p id="fullName-error" className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-orange-500 font-semibold mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-gray-700 text-orange-500 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && <p id="email-error" className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-orange-500 font-semibold mb-2"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-gray-700 text-orange-500 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
                aria-describedby={errors.phone ? "phone-error" : undefined}
              />
              {errors.phone && <p id="phone-error" className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </div>
            <div>
              <label
                htmlFor="date"
                className="block text-orange-500 font-semibold mb-2"
              >
                Pick a Date
              </label>
              <input
                type="date"
                placeholder="Select Date"
                className="w-full p-3 mb-4 border rounded-lg bg-gray-700 text-orange-500 border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
                min={new Date().toISOString().split("T")[0]}
              />
            </div>
            <div>
              <label
                htmlFor="linkedIn"
                className="block text-orange-500 font-semibold mb-2"
              >
                LinkedIn Profile (Optional)
              </label>
              <input
                type="url"
                id="linkedIn"
                name="linkedIn"
                value={formData.linkedIn}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-gray-700 text-orange-500 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
                aria-describedby={errors.linkedIn ? "linkedIn-error" : undefined}
              />
              {errors.linkedIn && <p id="linkedIn-error" className="text-red-500 text-sm mt-1">{errors.linkedIn}</p>}
            </div>
            <div>
              <label
                htmlFor="comments"
                className="block text-orange-500 font-semibold mb-2"
              >
                Additional Comments
              </label>
              <textarea
                id="comments"
                name="comments"
                rows={4}
                value={formData.comments}
                onChange={handleChange}
                className="w-full p-3 rounded bg-gray-700 text-orange-500 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
              ></textarea>
            </div>
            <button type="submit" className="w-full py-3 bg-orange-500 text-black font-bold rounded-lg hover:bg-orange-400 flex items-center justify-center transition duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500" disabled={loading}>
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                "Submit"
              )}
            </button>
          </form>
        </motion.div>
        <motion.button
          variants={itemVariants}
          onClick={() => router.back()}
          className="w-full max-w-lg py-3 bg-orange-500 text-black font-bold rounded-lg hover:bg-orange-400 transition duration-300 mb-8 focus:outline-none focus:ring-2 focus:ring-orange-500"
        >
          Back
        </motion.button>
        <Footer />
      </motion.div>
    </>
  );
};

export default BookACall;
