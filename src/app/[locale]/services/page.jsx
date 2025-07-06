import ServicesSection from "@/components/HomePage/ServicesSection";
import TestimonialsSection from "@/components/HomePage/TestimonialsSection";
import { getDictionary } from "@/dictionaries";
import CallToAction from "@/ui/CallToAction";
import Link from "next/link";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const page = async ({ params }) => {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const isArabic = locale === "ar";
  return (
    <div>
      {/* Header */}
      <div
        className="relative text-center py-10 uppercase z-19"
        style={{
          backgroundImage: "url('/images/gallery/0atxcjiQ22.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/50 z-0" />
        <div className="relative z-10">
          <h1 className="text-5xl max-sm:text-3xl font-light tracking-wider text-white">
            {dict.servicesPage.services}
          </h1>
          <div className="flex items-center justify-center mt-4 max-sm:mt-3 text-xs space-x-1 text-white">
            <Link href="/" className="hover:text-red-800 duration-300">
              {dict.servicesPage.home}
            </Link>
            {isArabic ? <IoIosArrowBack /> : <IoIosArrowForward />}
            <Link
              href="/product-category"
              className="text-white hover:text-red-800 duration-300"
            >
              {dict.servicesPage.services}
            </Link>
          </div>
        </div>
      </div>
      <div>
        <div className="-mt-16">
          <ServicesSection dict={dict} />
        </div>
        <TestimonialsSection dict={dict} />
        <CallToAction dict={dict} />
      </div>
    </div>
  );
};

export default page;
