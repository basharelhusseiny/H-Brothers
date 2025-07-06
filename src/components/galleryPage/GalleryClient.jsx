"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";

const GalleryClient = ({ dict, locale }) => {
  const isArabic = locale === "ar";
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const galleryImages = [
      { id: 1, src: "/images/gallery/0atxcjiQ.jpeg", alt: "Gallery Image 1" },
      { id: 2, src: "/images/gallery/4Oh7Venw.jpeg", alt: "Gallery Image 2" },
      { id: 3, src: "/images/gallery/5HcvSqLg.jpeg", alt: "Gallery Image 3" },
      { id: 4, src: "/images/gallery/7gKBu7CQ.jpeg", alt: "Gallery Image 4" },
      { id: 5, src: "/images/gallery/9pToLb_w.jpeg", alt: "Gallery Image 5" },
      { id: 6, src: "/images/gallery/39mYMhRQ.jpeg", alt: "Gallery Image 6" },
      { id: 7, src: "/images/gallery/212EuAKQ.jpeg", alt: "Gallery Image 7" },
      { id: 8, src: "/images/gallery/B6UNIGOw.jpeg", alt: "Gallery Image 8" },
      { id: 9, src: "/images/gallery/BCFQCLOQ.jpeg", alt: "Gallery Image 9" },
      { id: 10, src: "/images/gallery/FjDXbRRw.jpeg", alt: "Gallery Image 10" },
      { id: 11, src: "/images/gallery/fUnJA4SQ.jpeg", alt: "Gallery Image 11" },
      { id: 12, src: "/images/gallery/g2urEGNg.jpeg", alt: "Gallery Image 12" },
      { id: 13, src: "/images/gallery/Ie9Gj2cw.jpeg", alt: "Gallery Image 13" },
      { id: 14, src: "/images/gallery/iJkkXg4Q.jpeg", alt: "Gallery Image 14" },
      { id: 15, src: "/images/gallery/JcmIMURg.jpeg", alt: "Gallery Image 15" },
      { id: 16, src: "/images/gallery/ki09MOyg.jpeg", alt: "Gallery Image 16" },
      { id: 17, src: "/images/gallery/l5Pk0Msg.jpeg", alt: "Gallery Image 17" },
      { id: 18, src: "/images/gallery/Ll5WCgrg.jpeg", alt: "Gallery Image 18" },
      { id: 19, src: "/images/gallery/mNJJrL7w.jpeg", alt: "Gallery Image 19" },
      { id: 20, src: "/images/gallery/nCMSP5ag.jpeg", alt: "Gallery Image 20" },
      { id: 21, src: "/images/gallery/ne9LFRYg.jpeg", alt: "Gallery Image 21" },
      { id: 22, src: "/images/gallery/OcGBm50A.jpeg", alt: "Gallery Image 22" },
      { id: 23, src: "/images/gallery/qUaNiO1w.jpeg", alt: "Gallery Image 23" },
      { id: 24, src: "/images/gallery/r-XXmd_w.jpeg", alt: "Gallery Image 24" },
      { id: 25, src: "/images/gallery/rbByR6FA.jpeg", alt: "Gallery Image 25" },
      { id: 26, src: "/images/gallery/T1wcaW9A.jpeg", alt: "Gallery Image 26" },
      { id: 27, src: "/images/gallery/RQ3vLbUQ.jpeg", alt: "Gallery Image 27" },
      { id: 28, src: "/images/gallery/U7KbskkQ.jpeg", alt: "Gallery Image 28" },
      { id: 29, src: "/images/gallery/v5es26ZA.jpeg", alt: "Gallery Image 29" },
      { id: 30, src: "/images/gallery/vCbbW5Kg.jpeg", alt: "Gallery Image 30" },
      { id: 31, src: "/images/gallery/VQ6mTapg.jpeg", alt: "Gallery Image 31" },
      { id: 32, src: "/images/gallery/Vxo14EPQ.jpeg", alt: "Gallery Image 32" },
      { id: 33, src: "/images/gallery/w7Y6eKdw.jpeg", alt: "Gallery Image 33" },
      { id: 34, src: "/images/gallery/wbGBgvHA.jpeg", alt: "Gallery Image 34" },
      { id: 35, src: "/images/gallery/wSXzpNrg.jpeg", alt: "Gallery Image 35" },
      { id: 36, src: "/images/gallery/WVZgPijQ.jpeg", alt: "Gallery Image 36" },
    ];

    // Shuffle the images for random display
    const shuffledImages = [...galleryImages].sort(() => Math.random() - 0.5);
    setImages(shuffledImages);
    setLoading(false);
  }, []);

  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  const navigateImage = (direction) => {
    const currentIndex = images.findIndex((img) => img.id === selectedImage.id);
    let newIndex;

    if (direction === "next") {
      newIndex = (currentIndex + 1) % images.length;
    } else {
      newIndex = (currentIndex - 1 + images.length) % images.length;
    }

    setSelectedImage(images[newIndex]);
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div
        className="relative text-center py-10 uppercase"
        style={{
          backgroundImage: "url('/images/gallery/v5es26ZA.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/50 z-0" />
        <div className="relative z-10">
          <h1 className="text-5xl max-sm:text-3xl font-light tracking-wider text-white">
            {dict.navigation.gallery}
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
              {dict.navigation.gallery}
            </Link>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <section className="py-16 bg-gradient-to-br from-white via-[#f5f7fa] to-white">
        <div className="container mx-auto px-5">
          <h2 className="text-3xl md:text-4xl font-extrabold text-red-800 mb-12 text-center drop-shadow-lg">
            {dict.galleryPage.subtitle}
          </h2>

          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-red-800"></div>
            </div>
          ) : (
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {images.map((image, index) => (
                <motion.div
                  key={image.id}
                  className="relative overflow-hidden rounded-lg shadow-lg aspect-square"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.03 }}
                  onClick={() => openLightbox(image)}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      priority={index < 8} // Prioritize loading the first 8 images
                      onError={(e) => {
                        console.log(`Error loading image: ${image.src}`);
                        e.target.src = "/images/hero/hero-1.png"; // Fallback image
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <div className="text-white font-medium">{image.alt}</div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-red-800/80 rounded-full p-3 text-white">
                        <FaSearch size={20} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 text-white text-2xl z-10"
            onClick={closeLightbox}
          >
            ✕
          </button>

          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 p-2 rounded-full text-white"
            onClick={(e) => {
              e.stopPropagation();
              navigateImage("prev");
            }}
          >
            <IoIosArrowBack size={24} />
          </button>

          <motion.div
            className="relative max-w-4xl max-h-[80vh] w-full"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={1200}
              height={800}
              className="object-contain w-full h-full"
              onError={(e) => {
                e.target.src = "/images/hero/hero-1.png"; // Fallback image
              }}
            />
          </motion.div>

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 p-2 rounded-full text-white"
            onClick={(e) => {
              e.stopPropagation();
              navigateImage("next");
            }}
          >
            <IoIosArrowForward size={24} />
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default GalleryClient;
