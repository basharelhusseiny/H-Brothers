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

  if (!dict) return null; // أو Spinner لو حابب

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
                    className="bg-gray-800 hover:bg-red-700 text-white p-2.5 rounded-full transition-colors duration-300"
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
                {["home", "products", "services", "about", "contact"].map(
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
                    href="tel:+211921801700"
                    className="flex items-center hover:text-red-700 transition-colors duration-300"
                  >
                    <FiPhone className="mx-3 text-red-700" />
                    <span>{dict.footer.phone}</span>
                  </a>
                </li>
                <li className="flex items-center">
                  <a
                    href="mailto:info@hbrothersinvestment.com"
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

          {/* Payment Methods */}
          <div className="border-t border-gray-800 pt-5 pb-1">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0">
                <h4 className="text-sm font-medium text-white mb-3">
                  {dict.footer.weAccept}
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
                  <span className="text-sm block">
                    {dict.footer.securePayments}
                  </span>
                  <span className="text-xs text-gray-400">
                    {dict.footer.protectedBySSL}
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
