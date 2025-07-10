import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { GlobeAltIcon } from "@heroicons/react/24/outline";

const Footer = () => {
  return (
    <footer className="bg-[#501578] text-white pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        
        <div className="mb-6">
          <button className="flex items-center gap-2 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-400 text-white px-4 py-2 rounded-full font-medium hover:bg-gray-200 transition">
            <GlobeAltIcon className="w-5 h-5" />
            English
          </button>
        </div>

        {/* Bottom Footer Row */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-purple-700 pt-6 gap-4">

          {/* Copyright */}
          <p className="text-sm text-center md:text-left">
            Quizard © 2025. All rights reserved.
          </p>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a href="#" className="hover:underline">About Us</a>
            <a href="#" className="hover:underline">Contact Us</a>
            <a href="#" className="hover:underline">Privacy & Cookies Policy</a>
            <a href="#" className="hover:underline">Terms and Conditions</a>
            <a href="#" className="hover:underline">Disclaimer</a>
          </div>

          {/* Social icons */}
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-300 transition">
              <FaFacebookF size={18} />
            </a>
            <a href="#" className="hover:text-gray-300 transition">
              <FaInstagram size={18} />
            </a>
            <a href="#" className="hover:text-gray-300 transition">
              <FaLinkedinIn size={18} />
            </a>
            <a href="#" className="hover:text-gray-300 transition">
              <FaXTwitter size={18} />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
