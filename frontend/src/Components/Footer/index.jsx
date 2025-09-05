import React from "react";
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
          <div className="space-y-6">
            <h1 className="text-3xl font-bold uppercase">Coders Cafe</h1>
            <p className="text-sm max-w-[300px]">
              Coders Coffee is a quiet corner for dreamers and builders—where
              bold espresso meets fresh ideas, and every sip sparks something
              new.
            </p>
            <div>
              <p className="flex items-center gap-3">
                <FaPhone />
                +1 (123) 456-789
              </p>
              <p className="flex items-center gap-3">
                <FaMapLocation />
                Kmb 12, Rhn street
              </p>
            </div>
          </div>
          {/* Links */}
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">Quick Links</h1>
            <div className="grid grid-cols-2 gap-3">
              {/* first column */}
              <div>
                <ul className="space-y-2">
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact Us</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
              {/* second column */}
              <div>
                <ul className="space-y-2">
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact Us</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
            </div>
          </div>
          {/* Social */}
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">Follow Us</h1>
            <div className="flex items-center gap-3">
              <FaFacebookF className="text-xl hover:scale-105 duration-300" />
              <FaInstagram className="text-xl hover:scale-105 duration-300" />
              <FaTelegramPlane className="text-xl hover:scale-105 duration-300" />
              <FaGoogle className="text-xl hover:scale-105 duration-300" />
            </div>
            <div>
              <h1 className="text-xl font-semibold mb-2">Payment Methods</h1>
              <img src={CreditCards} alt="Credit Cards" className="w-[50%]" />
            </div>
          </div>
          {/* copyright */}
        </div>
        <p className="text-white text-center mt-8 pt-8  border-t-2">
          Copyright &copy; 2025 Company Name. All rights reserved.
        </p>
      </div>
    </div>
  );
}
