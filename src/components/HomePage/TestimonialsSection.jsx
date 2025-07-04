"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import Image from "next/image";

const TestimonialsSection = ({ dict }) => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      image: "/images/users/user1.png",
      rating: 5,
      comment: dict.testimonials[0],
      date: "05:42 PM",
      day: "Jan 26, 2025",
    },
    {
      id: 2,
      name: "Michael Chen",
      image: "/images/users/user4.png",
      rating: 5,
      comment: dict.testimonials[1],
      date: "07:15 AM",
      day: "Feb 2, 2025",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      image: "/images/users/user2.png",
      rating: 4,
      comment: dict.testimonials[2],
      date: "03:02 PM",
      day: "Apr 13, 2025",
    },
    {
      id: 4,
      name: "David Lee",
      image: "/images/users/user4.png",
      rating: 5,
      comment: dict.testimonials[3],
      date: "09:55 AM",
      day: "Feb 23, 2025",
    },
    {
      id: 5,
      name: "Amina Yusuf",
      image: "/images/users/user2.png",
      rating: 4,
      comment: dict.testimonials[4],
      date: "01:34 PM",
      day: "Jan 4, 2025",
    },
    {
      id: 6,
      name: "Carlos Martinez",
      image: "/images/users/user6.png",
      rating: 5,
      comment: dict.testimonials[5],
      date: "10:15 AM",
      day: "May 11, 2025",
    },
    {
      id: 7,
      name: "Linda Nguyen",
      image: "/images/users/user3.png",
      rating: 4,
      comment: dict.testimonials[6],
      date: "8:40 PM",
      day: "May 22, 2025",
    },
    {
      id: 8,
      name: "Omar Farouk",
      image: "/images/users/user4.png",
      rating: 5,
      comment: dict.testimonials[7],
      date: "03:57 AM",
      day: "Jan 17, 2025",
    },
    {
      id: 9,
      name: "Julia Smith",
      image: "/images/users/user2.png",
      rating: 5,
      comment: dict.testimonials[8],
      date: "10:12 PM",
      day: "Jun 22, 2025",
    },
  ];

  return (
    <section>
      <section className="mt-16 mb-20">
        <h2 className="text-3xl md:text-4xl font-extrabold text-red-800 mb-12 text-center drop-shadow-lg">
          {dict.testimonialsTitle}
        </h2>
        <div className="mt-5">
          <div className="container mx-auto px-5 pt-6">
            <Swiper
              className="testimonials-swiper"
              modules={[Autoplay, Pagination]}
              slidesPerGroup={1}
              slidesPerView={3}
              spaceBetween={40}
              loop={true}
              speed={2000}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                320: { slidesPerView: 1, slidesPerGroup: 1 },
                640: { slidesPerView: 2, slidesPerGroup: 2 },
                1024: { slidesPerView: 3, slidesPerGroup: 3 },
              }}
            >
              {testimonials.map((item) => {
                return (
                  <SwiperSlide className="overflow-visible">
                    <div
                      key={item.id}
                      className="relative h-[250px] min-h-full text-center overflow-visible bg-gradient-to-tl from-white to-red-100 p-5 pt-12 rounded-2xl mt-12"
                    >
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                        <Image
                          loading="lazy"
                          src={item.image}
                          alt={item.name}
                          width={70}
                          height={60}
                          className="rounded-full border-6 outline-8 outline-white border-red-800"
                        />
                      </div>
                      <div className="h-full flex justify-between flex-col mt-2">
                        <div>
                          <p className="text-xl font-semibold">{item.name}</p>
                          <p className="mt-3 text-[15px] tracking-wide text-gray-700 italic font-medium">
                            {item.comment}
                          </p>
                        </div>
                        <div className="flex items-center justify-between border-t-1 border-gray-400 mt-5 pt-2 text-sm text-gray-800">
                          <p>{item.day}</p>
                          <p className="text-gray-500">{item.date}</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </section>
    </section>
  );
};

export default TestimonialsSection;
