import Link from "next/link";
import React from "react";

const DefinitionSection = ({ dict }) => {
  const heroSectionSwiper = [
    {
      id: 1,
      image: "/images/gallery/4Oh7Venw.jpeg",
      discount: dict.hero.slides[0].discount,
      name: dict.hero.slides[0].name,
      description: dict.hero.slides[0].description,
      features: dict.hero.slides[0].features,
      linkTitle: dict.hero.slides[0].linkTitle,
      link: "/contact",
    },
    {
      id: 2,
      image: "/images/gallery/fUnJA4SQ.jpeg",
      discount: dict.hero.slides[1].discount,
      name: dict.hero.slides[1].name,
      description: dict.hero.slides[1].description,
      features: dict.hero.slides[1].features,
      linkTitle: dict.hero.slides[1].linkTitle,
      link: "/about",
    },
    {
      id: 3,
      image: "/images/gallery/Ie9Gj2cw.jpeg",
      discount: dict.hero.slides[2].discount,
      name: dict.hero.slides[2].name,
      description: dict.hero.slides[2].description,
      features: dict.hero.slides[2].features,
      linkTitle: dict.hero.slides[2].linkTitle,
      link: "/product-category",
    },
  ];

  return (
    <section className="pb-12">
      <h2 className="text-3xl md:text-4xl font-extrabold text-red-800 mb-12 text-center drop-shadow-lg">
        {dict.hero.sectionDef}
      </h2>
      <div className="container mx-auto px-5">
        <div className="grid gap-8 md:grid-cols-3">
          {heroSectionSwiper.map((slide) => (
            <div
              key={slide.id}
              className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl border border-white/30 flex flex-col items-center p-6 transition-transform hover:-translate-y-2 hover:shadow-2xl duration-300"
            >
              <div className="w-full flex justify-center mb-4">
                <img
                  src={slide.image}
                  alt={slide.name}
                  className="rounded-xl object-cover w-full h-40 mt-5 shadow-lg border border-white/30"
                />
              </div>
              <span className="inline-block bg-sky-600 text-white px-4 py-1 rounded-full text-xs font-medium mb-2">
                {slide.discount}
              </span>
              <h2 className="text-lg md:text-xl font-bold mb-1 text-red-800 text-center">
                {slide.name}
              </h2>
              <p className="mb-2 text-gray-700 tracking-wide font-semibold text-center">
                {slide.description}
              </p>
              <ul className="mb-3 space-y-1">
                {slide.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center text-[15px] text-black tracking-wide"
                  >
                    <span className="mx-2 text-lg text-sky-400 font-bold">
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href={slide.link}
                className="inline-flex items-center bg-sky-600 hover:bg-sky-700 text-white py-2 px-5 rounded-full text-sm font-semibold mt-2 transition-all duration-300"
              >
                {slide.linkTitle}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DefinitionSection;
