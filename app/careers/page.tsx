"use client";

import React, { useState, useRef, useEffect } from "react";
import type { Metadata } from "next";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useRouter } from "next/navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Careers at Bullione | Join Our Team",
  description: "Join Bullione's talent pool. Apply for exciting career opportunities and be a part of our dynamic team driving Africa's investment potential.",
  keywords: "careers, jobs, Africa investments, Bullione, employment opportunities",
  openGraph: {
    title: "Careers at Bullione | Join Our Team",
    description: "Join Bullione's talent pool. Apply for exciting career opportunities and be a part of our dynamic team driving Africa's investment potential.",
    url: "https://bullione.africa/careers",
    siteName: "Bullione",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers at Bullione | Join Our Team",
    description: "Join Bullione's talent pool. Apply for exciting career opportunities and be a part of our dynamic team driving Africa's investment potential.",
    images: ["/images/logo.png"],
  },
};

// Extend global window for EmailJS
declare global {
  interface Window {
    emailjs: any;
  }
}

const CareersPage: React.FC = () => {
  // Define form data type
  interface FormData {
    fullName: string;
    email: string;
    phone: string;
    linkedIn: string;
    comments: string;
  }

  // State for form data and sending status
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    linkedIn: "",
    comments: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const form = useRef<HTMLFormElement | null>(null);
  const router = useRouter();

  // Load EmailJS script and initialize
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.emailjs.com/dist/email.min.js";
    script.onload = () => {
      if (window.emailjs) {
        console.log("EmailJS loaded successfully");
        window.emailjs.init(process.env.EMAILJS_PUBLIC_KEY);
      }
    };
    document.body.appendChild(script);
  }, []);
  

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

  // Handle phone input change
  const handlePhoneChange = (value: string): void => {
    setFormData({ ...formData, phone: value });
  };

  // Handle form submission via EmailJS
  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    setIsSending(true);

    if (form.current && window.emailjs) {
      window.emailjs
      .sendForm(
        process.env.EMAILJS_SERVICE_ID!,
        process.env.EMAILJS_TEMPLATE_ID!,
        form.current
      )
        .then((result: any) => {
          alert("Application sent successfully! ✅");
          form.current?.reset();
          setFormData({
            fullName: "",
            email: "",
            phone: "",
            linkedIn: "",
            comments: "",
          });
        })
        .catch((error: any) => {
          alert("Failed to send application. ❌");
          console.error("EmailJS Error:", error);
        })
        .finally(() => {
          setIsSending(false);
        });
    }
  };

  return (

    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-orange-500 text-white px-4 py-2 rounded z-50">Skip to main content</a>
      <div id="main-content" className="min-h-screen flex flex-col bg-gray-900 text-orange-600 w-full">
        <div className="container mx-auto p-4 sm:p-6 flex-grow">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center">Careers at Bullione</h1>
          <p className="text-base sm:text-lg mb-8 text-center">Join Our Talent Pool</p>
          <p className="text-gray-300 mb-8 text-center text-sm sm:text-base">
            We’re always looking for exceptional talent. Submit your details, and we’ll reach out when an opportunity arises.
          </p>

          <form
            ref={form}
            onSubmit={handleSubmit}
            className="max-w-3xl mx-auto bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg"
          >
            <input type="hidden" name="subject" value="New Career Application" />
            <div className="mb-4">
              <label className="block mb-2 font-semibold text-orange-500" htmlFor="fullName">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full p-2 rounded-lg bg-gray-700 text-orange-600 border border-orange-500 focus:ring-2 focus:ring-orange-400"
                aria-describedby={errors.fullName ? "fullName-error" : undefined}
              />
              {errors.fullName && <p id="fullName-error" className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
            </div>

            <div className="mb-4">
              <label className="block mb-2 font-semibold text-orange-500" htmlFor="email">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-2 rounded-lg bg-gray-700 text-orange-600 border border-orange-500 focus:ring-2 focus:ring-orange-400"
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && <p id="email-error" className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div className="mb-4">
              <label className="block mb-2 font-semibold text-orange-500">Phone Number</label>
              <PhoneInput
                country={"ke"}
                value={formData.phone}
                onChange={handlePhoneChange}
                inputProps={{ name: "phone", required: true, "aria-describedby": errors.phone ? "phone-error" : undefined }}
                containerClass="w-full"
                inputClass="w-full p-2 rounded-lg bg-gray-700 text-orange-600 border border-orange-500 focus:ring-2 focus:ring-orange-400"
                buttonClass="bg-gray-700 border-orange-500"
                dropdownClass="bg-gray-800 text-orange-600"
              />
              {errors.phone && <p id="phone-error" className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </div>

            <div className="mb-4">
              <label className="block mb-2 font-semibold text-orange-500" htmlFor="linkedIn">
                LinkedIn Profile
              </label>
              <input
                type="url"
                id="linkedIn"
                name="linkedIn"
                value={formData.linkedIn}
                onChange={handleChange}
                required
                pattern="https?://(www\.)?linkedin\.com/.*"
                placeholder="https://www.linkedin.com/in/your-profile"
                className="w-full p-2 rounded-lg bg-gray-700 text-orange-600 border border-orange-500 focus:ring-2 focus:ring-orange-400"
                aria-describedby={errors.linkedIn ? "linkedIn-error" : undefined}
              />
              {errors.linkedIn && <p id="linkedIn-error" className="text-red-500 text-sm mt-1">{errors.linkedIn}</p>}
            </div>

            <div className="mb-4">
              <label className="block mb-2 font-semibold text-orange-500" htmlFor="comments">
                Additional Comments
              </label>
              <textarea
                id="comments"
                name="comments"
                rows={4}
                value={formData.comments}
                onChange={handleChange}
                className="w-full p-2 rounded bg-gray-700 text-orange-600 border border-orange-500 focus:ring-2 focus:ring-orange-400"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSending}
              className="w-full py-3 bg-orange-500 text-black font-bold rounded-lg hover:bg-orange-400 transition duration-300 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              {isSending ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                "Submit Application"
              )}
            </button>
            <div className="p-6">
            <button
              onClick={() => router.back()}
              className="bg-orange-600 text-white mb-4 px-4 py-3 rounded mr-4 font-bold hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              Go Back
            </button>
            </div>
          </form>
        </div>
        <Footer />
      </div>
    </>
  );
  
};


export default CareersPage;
