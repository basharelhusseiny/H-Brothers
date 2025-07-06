import Image from "next/image";
import Link from "next/link";
import { getDictionary } from "@/dictionaries";
import { FaCheckCircle } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import TestimonialsSection from "@/components/HomePage/TestimonialsSection";
import CallToAction from "@/ui/CallToAction";
import StatsSection from "@/ui/StatsSection";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return {
    title: dict?.metadataAbout?.about?.title || "About Us - HBrothers",
    description:
      dict?.metadataAbout?.about?.description ||
      "Learn more about HBrothers, a trusted leader in the import and distribution of essential consumer goods.",
    alternates: {
      canonical: `https://hbrothersinvestment.com/${locale}/about`,
    },
    openGraph: {
      title: "About Us - HBrothers",
      description:
        "Discover the mission, vision, and story behind HBrothers and how we deliver essential goods with integrity.",
      url: `https://hbrothersinvestment.com/${locale}/about`,
      images: [
        {
          url: "https://hbrothersinvestment.com/og-about.jpg",
          width: 1200,
          height: 630,
          alt: "About HBrothers",
        },
      ],
      locale: locale === "ar" ? "ar_EG" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "About Us - HBrothers",
      description:
        "Discover the mission, vision, and story behind HBrothers and how we deliver essential goods with integrity.",
      images: ["https://hbrothersinvestment.com/og-about.jpg"],
    },
  };
}

const AboutUs = async ({ params }) => {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const isArabic = locale === "ar";

  const companyValues = dict.aboutPage.companyValues;

  const statsData = [
    { number: "10+", label: dict.aboutPage.stats.years },
    { number: "80+", label: dict.aboutPage.stats.varieties },
    { number: "10k+", label: dict.aboutPage.stats.suppliers },
    { number: "1000+", label: dict.aboutPage.stats.tons },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div
        className="relative text-center py-10 uppercase z-19"
        style={{
          backgroundImage: "url('/images/gallery/RQ3vLbUQ.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/50 z-0" />
        <div className="relative z-10">
          <h1 className="text-5xl max-sm:text-3xl font-light tracking-wider text-white">
            {dict.aboutPage.about}
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
              {dict.aboutPage.about}
            </Link>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-5">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="w-full md:w-1/2">
              <div className="relative w-full h-64 md:h-[400px]">
                <Image
                  src="/images/H-brothers.jpeg"
                  alt="H Brothers"
                  fill
                  className="object-cover rounded-md"
                  priority
                />
              </div>
            </div>

            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-red-800 mb-3">
                {dict.aboutPage.ourStoryTitle}
              </h2>
              <div className="w-20 h-1 bg-red-800 mb-6 rounded-2xl"></div>
              <p className="text-black font-medium tracking-wide mb-4">
                {dict.aboutPage.ourStoryDescription1}
              </p>
              <p className="text-black tracking-wide mb-6">
                {dict.aboutPage.ourStoryDescription2}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {dict.aboutPage.highlights.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <FaCheckCircle className="text-red-800 mx-2" />
                    <span className="text-gray-800 tracking-wide">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="bg-gray-50 py-5 mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-red-800 my-10 text-center drop-shadow-lg">
          {dict.aboutPage.ourValuesTitle}
        </h2>
        <div className="container mx-auto px-5 py-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyValues.map((value, index) => (
              <div
                key={`${index + 1}`}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-red-800"
              >
                <h3 className="text-xl font-semibold text-red-800 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection stats={dict.aboutPage.stats} dict={dict} />
      {/* Testimonials */}
      <TestimonialsSection dict={dict} />
      {/* CTA */}
      <CallToAction dict={dict} />
    </div>
  );
};

export default AboutUs;
