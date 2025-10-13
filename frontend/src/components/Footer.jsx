import React from "react";
import { Instagram, Facebook, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-gray-200 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {/* Brand / Logo */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600">
              Velora
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Velora is your trusted destination for fast, secure, and stylish
              online shopping. From the latest fashion to must-have accessories,
              we bring you premium products at competitive prices, delivered
              with care.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Shop smarter and look sharper with Velora—your one-stop
              destination for all your fashion needs.
            </p>
            <p className="text-gray-400 font-medium">📌 Kokrajhar, Assam</p>
          </div>

          {/* Navigation */}
          <div className="space-y-2 ">
            <h3 className="font-semibold text-gray-300">Quick Links</h3>
            <hr />

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
            <hr />
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
        {/* Bottom line */}
        <div className="mt-12 border-t border-teal-500/20 pt-4 text-center text-gray-300 text-sm">
          All Rights Reserved © {new Date().getFullYear()} | <span className="text-teal-300">Velora</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
