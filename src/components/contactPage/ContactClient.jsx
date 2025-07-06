"use client";

import { motion } from "framer-motion";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";
import Link from "next/link";

const ContactClient = ({ dict, locale }) => {
  const isArabic = locale === "ar";

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="text-2xl text-red-800" />,
      title: dict.contactPage.info.location,
      details: ["Bor Road, Gumbo, Juba, South Sudan"],
    },
    {
      icon: <FaPhoneAlt className="text-2xl text-red-800" />,
      title: dict.contactPage.info.phone,
      details: ["+211 927 489786"],
    },
    {
      icon: <FaEnvelope className="text-2xl text-red-800" />,
      title: dict.contactPage.info.email,
      details: ["info@hbrothersinvestment.com"],
    },
    {
      icon: <FaClock className="text-2xl text-red-800" />,
      title: dict.contactPage.info.hours,
      details: [
        dict.contactPage.info.workingDays,
        dict.contactPage.info.sunday,
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div
        className="relative text-center py-10 uppercase z-19"
        style={{
          backgroundImage: "url('/images/gallery/9pToLb_w.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/50 z-0" />
        <div className="relative z-10">
          <h1 className="text-5xl max-sm:text-3xl font-light tracking-wider text-white">
            {dict.navigation.contact}
          </h1>
          <div className="flex items-center justify-center mt-4 max-sm:mt-3 text-xs space-x-1 text-white">
            <Link href="/" className="hover:text-red-800 duration-300">
              {dict.navigation.home}
            </Link>
            {isArabic ? <IoIosArrowBack /> : <IoIosArrowForward />}
            <Link
              href="/product-category"
              className="text-white hover:text-red-800 duration-300"
            >
              {dict.navigation.contact}
            </Link>
          </div>
        </div>
      </div>

      {/* Contact Form and Map Section */}
      <motion.section
        className="py-10 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
      >
        <div className="container mx-auto px-5">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Contact Form */}
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-semibold text-red-800 mb-3">
                {dict.contactPage.title}
              </h2>
              <div className="w-20 h-1 bg-red-800 mb-6 rounded-2xl"></div>
              <p className="text-gray-600 mb-6">{dict.contactPage.subtitle}</p>

              <form
                action="https://formsubmit.co/info@hbrothersinvestment.com"
                method="POST"
                className="space-y-4"
              >
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="box" />
                <input
                  type="hidden"
                  name="_honey"
                  style={{ display: "none" }}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {dict.contactPage.form.name}
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-800 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {dict.contactPage.form.email}
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-800 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {dict.contactPage.form.subject}
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-800 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {dict.contactPage.form.message}
                  </label>
                  <textarea
                    name="message"
                    rows="5"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-800 focus:border-transparent"
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    className="inline-block bg-red-800 hover:bg-red-700 text-white font-medium py-3 px-8 rounded-md transition-colors shadow-md hover:shadow-lg"
                  >
                    {dict.contactPage.form.submit}
                  </button>
                </div>
              </form>
            </div>

            {/* Map */}
            <div className="lg:w-1/2 mt-8 lg:mt-0">
              <h2 className="text-3xl font-semibold text-red-800 mb-3">
                {dict.contactPage.locationTitle}
              </h2>
              <div className="w-20 h-1 bg-red-800 mb-6 rounded-2xl"></div>
              <div className="h-[400px] rounded-lg overflow-hidden shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15963.17737485779!2d31.623909!3d4.8203034!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwNDknMTMuMSJOIDMxwrAzNycyNi4xIkU!5e0!3m2!1sen!2sus!4v1720093200000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Custom Location"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Contact Info Section */}
      <motion.section
        className="pt-7 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-red-800 mb-10 text-center drop-shadow-lg">
          {dict.contactPage.getTitle}
        </h2>
        <div className="container mx-auto px-5 py-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border-t-4 border-red-800 text-center"
                variants={fadeIn}
              >
                <div className="flex justify-center mb-4">{info.icon}</div>
                <h3 className="text-xl font-semibold text-red-800 mb-3">
                  {info.title}
                </h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-600">
                    {detail}
                  </p>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default ContactClient;
