import React from "react";
import { motion } from "framer-motion";
import { FaI, FaPhone } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import CreditCards from "../../assets/website/credit-cards.webp";

export default function Footer() {
  return (
    <div className="bg-gradient-to-r from-primary to-primary-dark  text-white pt-12 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Company Details */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              delay: 0.2,
              duration: 0.6,
            }}
            className="space-y-3 sm:space-y-6"
          >
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold uppercase">Coders Cafe</h1>
            <p className="text-[10px] sm:text-sm max-w-[300px]">
              Coders Coffee is a quiet corner for dreamers and builders—where
              bold espresso meets fresh ideas, and every sip sparks something
              new.
            </p>
            <div>
              <p className="flex items-center gap-3 text-sm ">
                <FaPhone />
                +1 (123) 456-789
              </p>
              <p className="flex items-center gap-3 text-sm">
                <FaMapLocation />
                Kmb 12, Rhn street
              </p>
            </div>
          </motion.div>
          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              delay: 0.4,
              duration: 0.6,
            }}
            className="space-y-3 sm:space-y-6"
          >
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
              Quick Links
            </h1>
            <div>
              <ul className="space-y-1 sm:space-y-2 text-sm">
                <li>Home</li>
                <li>About</li>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </motion.div>
          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              delay: 0.6,
              duration: 0.6,
            }}
            className="space-y-3 sm:space-y-6"
          >
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">Follow Us</h1>
            <div className="flex items-center gap-2 sm:gap-3">
              <FaFacebookF className="text-sm sm:text-xl hover:scale-105 duration-300" />
              <FaInstagram className="text-sm sm:text-xl hover:scale-105 duration-300" />
              <FaTelegramPlane className="text-sm sm:text-xl hover:scale-105 duration-300" />
              <FaGoogle className="text-sm sm:text-xl hover:scale-105 duration-300" />
            </div>
            <div>
              <h1 className="text-xl font-semibold mb-2">Payment Methods</h1>
              <img src={CreditCards} alt="Credit Cards" className="w-[50%]" />
            </div>
          </motion.div>
          {/* copyright */}
        </div>
        <p className="text-white text-center mt-8 pt-8  border-t-2 text-xs sm:text-sm">
          Copyright &copy; 2025 Company Name. All rights reserved.
        </p>
      </div>
    </div>
  );
}
