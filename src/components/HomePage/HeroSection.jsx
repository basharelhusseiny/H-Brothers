"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
// import FeaturesSection from "./FeaturesSide";
import {
  FaGlobeAmericas,
  FaMapMarkedAlt,
  FaPeopleCarry,
  FaTruckMoving,
} from "react-icons/fa";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Link from "next/link";
import Image from "next/image";
import FeaturesSection from "./FeaturesSide";

const HeroSection = ({ dict }) => {
  const heroSectionSwiper = [
    {
      id: 1,
      image: "/images/hero/hero-1.png",
      discount: dict.hero.slides[0].discount,
      name: dict.hero.slides[0].name,
      description: dict.hero.slides[0].description,
      features: dict.hero.slides[0].features,
    },
    {
      id: 2,
      image: "/images/hero/hero-2.png",
      discount: dict.hero.slides[1].discount,
      name: dict.hero.slides[1].name,
      description: dict.hero.slides[1].description,
      features: dict.hero.slides[1].features,
    },
    {
      id: 3,
      image: "/images/hero/hero-3.png",
      discount: dict.hero.slides[2].discount,
      name: dict.hero.slides[2].name,
      description: dict.hero.slides[2].description,
      features: dict.hero.slides[2].features,
    },
  ];

  const icons = [
    <FaGlobeAmericas className="text-red-800" size={24} />,
    <FaMapMarkedAlt className="text-red-800" size={24} />,
    <FaPeopleCarry className="text-red-800" size={24} />,
    <FaTruckMoving className="text-red-800" size={24} />,
  ];

  const serviceFeatures = dict.hero.features.map((feature, index) => ({
    id: index + 1,
    icon: icons[index],
    title: feature.title,
    description: feature.description,
  }));

  return (
    <section>
      <div className="container mx-auto px-5 pt-6">
        <div className="flex flex-col lg:flex-row items-stretch gap-5">
          {/* Main Slider - Left Side */}
          <div className="w-full lg:w-4/6">
            <Swiper
              loop={true}
              speed={2000}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Pagination]}
              className="w-full h-[400px] sm:h-[350px] md:h-[450px] rounded-lg overflow-hidden"
            >
              {heroSectionSwiper.map((slide) => {
                return (
                  <SwiperSlide
                    key={slide.id}
                    className="relative h-[400px] sm:h-[350px] md:h-[450px] rounded-lg overflow-hidden"
                  >
                    <Image
                      src={`${slide.image}`}
                      alt={slide.name}
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center">
                      <div className="text-white p-4 md:p-6 max-w-xl">
                        <span className="inline-block bg-sky-600 text-white px-4 py-1 rounded-full text-xs md:text-sm font-medium mb-2 md:mb-3">
                          {slide.discount}
                        </span>
                        <h2 className="text-xl md:text-3xl font-bold mb-1 md:mb-2">
                          {slide.name}
                        </h2>
                        <p className="mb-2 md:mb-4 text-gray-100 font-semibold">
                          {slide.description}
                        </p>
                        <ul className="mb-3 md:mb-4 space-y-0 md:space-y-1">
                          {slide.features.map((feature, index) => (
                            <li
                              key={index}
                              className="flex items-center text-sm"
                            >
                              <span className="mx-2 text-lg text-sky-500 font-bold">
                                ✓
                              </span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <div>
                          <Link
                            href="/shop"
                            className="inline-flex items-center bg-sky-600 hover:bg-sky-600 text-white py-1.5 px-3 md:py-2 md:px-4 rounded-md text-sm transition-all duration-300"
                          >
                            {dict.hero.cta}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          {/* Right Side - Features */}
          <FeaturesSection serviceFeatures={serviceFeatures} dict={dict} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
