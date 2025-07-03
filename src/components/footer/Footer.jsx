import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaApple,
  FaGooglePlay,
} from "react-icons/fa";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="mt-14">
      <div className="bg-gray-900 text-gray-300 pt-12 pb-3">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="mb-6 flex items-center">
                <Image
                  src="/images/logo-hbrothers.webp"
                  alt="H Brothers"
                  width={300}
                  height={40}
                  className="mr-3"
                />
              </div>
              <p className="mb-6 text-gray-400 leading-relaxed">
                H BROTHERS is a trusted company specializing in importing and
                distributing essential consumer goods. With strong international
                partnerships and a wide distribution network, we serve
                communities with integrity and reliability.
              </p>
              <div className="flex space-x-3 mb-6">
                <a
                  href="/"
                  className="bg-gray-800 hover:bg-red-700 text-white p-2.5 rounded-full transition-colors duration-300"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="/"
                  className="bg-gray-800 hover:bg-red-700 text-white p-2.5 rounded-full transition-colors duration-300"
                >
                  <FaTwitter />
                </a>
                <a
                  href="#"
                  className="bg-gray-800 hover:bg-red-700 text-white p-2.5 rounded-full transition-colors duration-300"
                >
                  <FaInstagram />
                </a>
                <a
                  href="#"
                  className="bg-gray-800 hover:bg-red-700 text-white p-2.5 rounded-full transition-colors duration-300"
                >
                  <FaYoutube />
                </a>
                <a
                  href="#"
                  className="bg-gray-800 hover:bg-red-700 text-white p-2.5 rounded-full transition-colors duration-300"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4 pb-2 border-b border-gray-700">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="hover:text-red-700 transition-colors duration-300 flex items-center"
                  >
                    <span className="mr-2">›</span> Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/product-category"
                    className="hover:text-red-700 transition-colors duration-300 flex items-center"
                  >
                    <span className="mr-2">›</span> products
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="hover:text-red-700 transition-colors duration-300 flex items-center"
                  >
                    <span className="mr-2">›</span> Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="hover:text-red-700 transition-colors duration-300 flex items-center"
                  >
                    <span className="mr-2">›</span> About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-red-700 transition-colors duration-300 flex items-center"
                  >
                    <span className="mr-2">›</span> Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4 pb-2 border-b border-gray-700">
                Contact Us
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <FiMapPin className="mt-1 mr-3 text-red-700" />
                  <span>123 Tech Street, Digital City, 10001, USA</span>
                </li>
                <li className="flex items-center">
                  <FiPhone className="mr-3 text-red-700" />
                  <span>+1 (800) 900-566</span>
                </li>
                <li className="flex items-center">
                  <FiMail className="mr-3 text-red-700" />
                  <span>support@voltify.com</span>
                </li>
              </ul>

              <div className="mt-6">
                <h4 className="text-white font-medium mb-2">Business Hours</h4>
                <p className="text-sm text-gray-400">
                  Monday - Friday: 9:00 AM - 8:00 PM
                  <br />
                  Saturday: 10:00 AM - 6:00 PM
                  <br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="border-t border-gray-800 pt-5 pb-1">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0">
                <h4 className="text-sm font-medium text-white mb-3">
                  We Accept:
                </h4>
                <div className="flex space-x-3">
                  <Image
                    loading="lazy"
                    src="/images/footer_img.png"
                    alt="Apple Pay"
                    width={200}
                    height={30}
                    className="bg-white rounded px-1"
                  />
                </div>
              </div>
              <div className="flex items-center bg-gray-800 px-4 py-2 rounded-lg">
                <div>
                  <span className="text-sm block">Secure Payments</span>
                  <span className="text-xs text-gray-400">
                    Protected by SSL
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-gray-950 py-3">
        <div className="container mx-auto px-5">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-center md:text-left text-gray-400">
              &copy; 2025 H Brothers. All rights reserved.
            </p>
            <div className="mt-3 md:mt-0">
              <ul className="flex flex-wrap justify-center md:justify-end gap-4 text-sm text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-red-700 transition-colors duration-300"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-red-700 transition-colors duration-300"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-red-700 transition-colors duration-300"
                  >
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-red-700 transition-colors duration-300"
                  >
                    Accessibility
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
