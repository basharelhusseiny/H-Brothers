"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import {
  FaGlobeAmericas,
  FaMapMarkedAlt,
  FaPeopleCarry,
  FaTruckMoving,
} from "react-icons/fa";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import FeaturesSection from "./FeaturesSide";

const HeroSection = ({ dict }) => {
  const heroSectionSwiper = [
    {
      id: 3,
      image: "/images/hero/hero-33.jpeg",
      name: dict.hero.slides[2].name,
    },
    {
      id: 4,
      image: "/images/gallery/4Oh7Venw.jpeg",
      name: dict.hero.slides[2].name,
    },
    {
      id: 5,
      image: "/images/gallery/ki09MOyg.jpeg",
      name: dict.hero.slides[2].name,
    },
    {
      id: 1,
      image: "/images/hero/hero-1.png",
      name: dict.hero.slides[0].name,
    },
    {
      id: 2,
      image: "/images/gallery/r-XXmd_w.jpeg",
      name: dict.hero.slides[1].name,
    },
    {
      id: 6,
      image: "/images/gallery/vCbbW5Kg.jpeg",
      name: dict.hero.slides[2].name,
    },
    {
      id: 7,
      image: "/images/gallery/RQ3vLbUQ.jpeg",
      name: dict.hero.slides[2].name,
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
                    {/* <div className="absolute inset-0 bg-black/40 flex items-center"></div> */}
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
