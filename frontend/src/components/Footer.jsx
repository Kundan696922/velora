import React from "react";
import { Instagram, Facebook, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-gray-200 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Brand / Logo */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600">
              Velora
            </h2>
            <p className="text-gray-400">
              Modern, sleek, and premium shopping experience.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-2">
                      <h3 className="font-semibold text-gray-300">Navigation</h3>
                      
            <ul className="space-y-1">
              <li>
                <a href="/" className="hover:text-teal-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/cart"
                  className="hover:text-teal-400 transition-colors"
                >
                  Cart
                </a>
              </li>
              <li>
                <a
                  href="/signup"
                  className="hover:text-teal-400 transition-colors"
                >
                  Sign Up
                </a>
              </li>
              <li>
                <a
                  href="/login"
                  className="hover:text-teal-400 transition-colors"
                >
                  Login
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-300">Stay Connected</h3>
            <div className="flex gap-4 mt-4 text-gray-400">
              <a href="#" className="hover:text-teal-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-teal-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-teal-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-teal-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-12 border-t border-teal-500/20 pt-4 text-center text-gray-500 text-sm">
          © {currentYear} Velora. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
