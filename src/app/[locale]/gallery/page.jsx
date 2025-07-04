import GalleryClient from "@/components/galleryPage/GalleryClient";
import TestimonialsSection from "@/components/HomePage/TestimonialsSection";
import { getDictionary } from "@/dictionaries";
import CallToAction from "@/ui/CallToAction";
import React from "react";

const Gallery = async ({ params }) => {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  return (
    <div>
      <GalleryClient dict={dict} locale={locale} />
      <TestimonialsSection dict={dict} />
      <CallToAction dict={dict} />
    </div>
  );
};

export default Gallery;
