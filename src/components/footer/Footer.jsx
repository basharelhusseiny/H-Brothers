"use client";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const Footer = ({ locale }) => {
  const [dict, setDict] = useState(null);

  useEffect(() => {
    const loadLocale = async () => {
      const translations = await import(`@/dictionaries/${locale}.json`);
      setDict(translations);
    };

    loadLocale();
  }, [locale]);

  if (!dict) return null;

  return (
    <footer>
      <div className="relative bg-gradient-to-br from-[#101217] via-[#181c23] to-[#101217] text-gray-300 pt-14 pb-3 overflow-hidden">
        {/* Decorative blurred circles */}
        <div className="absolute -top-16 -left-16 w-60 h-60 bg-sky-700 opacity-20 rounded-full filter blur-2xl z-0" />
        <div className="absolute -bottom-16 -right-16 w-72 h-72 bg-pink-900 opacity-20 rounded-full filter blur-2xl z-0" />
        <div className="container mx-auto px-5 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
            {/* Company Info */}
            <div>
              <div className="mb-6 flex items-center">
                <Image
                  src="/images/H BROTHERS' logo V2.png"
                  alt="H Brothers"
                  width={220}
                  height={40}
                  className="mx-3"
                />
              </div>
              <p className="mb-6 text-gray-400 leading-relaxed">
                {dict.footer.about}
              </p>
              <div className="flex space-x-3 mb-6">
                {[
                  FaFacebookF,
                  FaTwitter,
                  FaInstagram,
                  FaYoutube,
                  FaLinkedinIn,
                ].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="bg-[#181c23] hover:bg-red-700 text-white p-2.5 rounded-full transition-colors duration-300"
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4 pb-2 border-b border-gray-700">
                {dict.footer.quickLinksTitle}
              </h3>
              <ul className="space-y-2">
                {["home", "products", "our goods","gallery", "about", "contact"].map(
                  (key) => (
                    <li key={key}>
                      <Link
                        href={`/${key === "home" ? "" : key}`}
                        className="hover:text-red-700 transition-colors duration-300 flex items-center"
                      >
                        <span className="mx-2">›</span>
                        {dict.footer.links[key]}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4 pb-2 border-b border-gray-700">
                {dict.footer.contactTitle}
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <FiMapPin className="mt-1 mx-3 text-red-700" />
                  <span>{dict.footer.address}</span>
                </li>
                <li className="flex items-center">
                  <a
                    href={`tel:${dict.footer.phone.replace(/\s+/g, "")}`}
                    className="flex items-center hover:text-red-700 transition-colors duration-300"
                  >
                    <FiPhone className="mx-3 text-red-700" />
                    <span>{dict.footer.phone}</span>
                  </a>
                </li>
                <li className="flex items-center">
                  <a
                    href={`mailto:${dict.footer.email}`}
                    className="flex items-center hover:text-red-700 transition-colors duration-300"
                  >
                    <FiMail className="mx-3 text-red-700" />
                    <span>{dict.footer.email}</span>
                  </a>
                </li>
              </ul>
              <div className="mt-6">
                <h4 className="text-white font-medium mb-2">
                  {dict.footer.businessHours}
                </h4>
                <p className="text-sm text-gray-400 whitespace-pre-line">
                  {dict.footer.hours}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Copyright */}
        <div className="bg-[#181c23] py-3 mt-8">
          <div className="container mx-auto px-5">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-center md:text-left text-gray-400">
                {dict.footer.copyright}
              </p>
              <div className="mt-3 md:mt-0">
                <ul className="flex flex-wrap justify-center md:justify-end gap-4 text-sm text-gray-400">
                  {[
                    "privacyPolicy",
                    "termsOfService",
                    "cookiePolicy",
                    "accessibility",
                  ].map((key) => (
                    <li key={key}>
                      <a
                        href="#"
                        className="hover:text-red-700 transition-colors duration-300"
                      >
                        {dict.footer[key]}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-2 text-center text-sm text-gray-500">
              {dict.footer.powered}{" "}
              <span className="font-semibold text-sky-400">HASH Solutions</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
