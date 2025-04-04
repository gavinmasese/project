"use client";

import "@fortawesome/fontawesome-free/css/all.min.css";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import emailjs from "emailjs-com";

const FooterSection = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [isSending, setIsSending] = useState(false);

  // Initialize EmailJS with your public key when the component mounts
  useEffect(() => {
    emailjs.init("LL_UeXslgwKLM98Py");
  }, []);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);

    if (form.current) {
      emailjs
        .sendForm(
          "service_wua4zu9", // Your Service ID
          "template_quwyz5v", // Your Template ID
          form.current
        )
        .then((result: any) => {
          console.log("EmailJS result:", result);
          alert("Message sent successfully! ✅");
          form.current?.reset();
        })
        .catch((error: any) => {
          console.error("EmailJS Error:", error);
          alert("Failed to send message. ❌");
        })
        .finally(() => {
          setIsSending(false);
        });
    } else {
      alert("Form reference not found. ❌");
      setIsSending(false);
    }
  };

  return (
    <footer id="contact" className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Top Section - Logo & About */}
        <div className="flex flex-col md:flex-row items-center justify-between pb-6 border-b border-gray-700">
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            <Link href="/" legacyBehavior>
              <a>
                <img src="/images/logo 2.png" alt="Bullione Logo" className="h-32" />
              </a>
            </Link>
          </div>
          <div className="text-center md:text-left mt-4 md:mt-0 max-w-md">
            <h1 className="text-white font-bold text-2xl">Bullione</h1>
            <p className="text-black-400 text-sm mt-1">
              Pioneering Growth, Crafting Investment Excellence in Africa,
              your Gateway to Africa&apos;s Golden Future
            </p>
          </div>
          {/* About Us */}
          <div className="text-center md:text-left mt-4 md:mt-0 max-w-md">
            <h2 className="text-lg font-semibold">About Us</h2>
            <p className="text-black-400 text-sm">
              Bullione is your gateway to Africa&apos;s golden future. We specialize in crafting investment excellence and pioneering growth across the continent.
            </p>
          </div>
        </div>

        {/* Middle Section - Contact Form & Socials */}
        <div className="flex flex-col md:flex-row justify-between items-start mt-8 gap-8">
          {/* Social Icons */}
          <div className="flex flex-col items-center md:items-start w-full md:w-auto">
            <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.pinterest.com/bullioneafrica/"
                className="text-gray-400 hover:text-white text-2xl transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-pinterest"></i>
              </a>
              <a
                href="https://x.com/BullioneAfrica"
                className="text-gray-400 hover:text-white text-2xl transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a
                href="https://www.instagram.com/bullioneafrica/"
                className="text-gray-400 hover:text-white text-2xl transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/bullione-africa/"
                className="text-gray-400 hover:text-white text-2xl transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a
                href="https://youtube.com/@bullioneafrica"
                className="text-gray-400 hover:text-white text-2xl transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-youtube"></i>
              </a>
              <a
                href="https://www.snapchat.com/add/bullioneafrica?share_id=otcaOqz2HjY&locale=en-US"
                className="text-gray-400 hover:text-white text-2xl transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-snapchat"></i>
              </a>
              <a
                href="http://tiktok.com/@bullione.africa"
                className="text-gray-400 hover:text-white text-2xl transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-tiktok"></i>
              </a>
              <a
                href="https://wa.me/message/D6EAHJMWSK4ZC1"
                className="text-gray-400 hover:text-white text-2xl transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-whatsapp"></i>
              </a>
              <a
                href="mailto:info@bullione.africa"
                className="text-gray-400 hover:text-white text-2xl transition-all duration-300"
              >
                <i className="fa-solid fa-envelope"></i>
              </a>
              <a
                href="https://www.threads.net/@bullioneafrica"
                className="text-gray-400 hover:text-white text-2xl transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-threads"></i>
              </a>
              <a
                href="https://web.facebook.com/profile.php?id=61572838231975"
                className="text-gray-400 hover:text-white text-2xl transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-facebook"></i>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg p-6 shadow-lg w-full md:w-1/2">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Contact Us</h3>
            <form ref={form} onSubmit={sendEmail} className="mt-4">
              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                className="w-full p-3 mb-4 border rounded-lg text-gray-900 bg-gray-100"
                required
              />
              <input
                type="email"
                name="to_email"
                placeholder="Recipient's Email"
                className="w-full p-3 mb-4 border rounded-lg text-gray-900 bg-gray-100"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                className="w-full p-3 mb-4 border rounded-lg text-gray-900 bg-gray-100"
                required
              ></textarea>
              <button
                type="submit"
                className={`bg-orange-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-orange-700 transition-all duration-300 ${
                  isSending ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={isSending}
              >
                {isSending ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="text-center text-white-500 text-sm mt-8 border-t border-gray-700 pt-4">
        <p>© {new Date().getFullYear()} Bullione. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default FooterSection;
