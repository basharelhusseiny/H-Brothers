import AboutSection from "@/components/HomePage/AboutSection";
import DefinitionSection from "@/components/HomePage/DefinitionSection";
import HeroSection from "@/components/HomePage/HeroSection";
import ServicesSection from "@/components/HomePage/ServicesSection";
import TestimonialsSection from "@/components/HomePage/TestimonialsSection";
import VideoSection from "@/components/HomePage/VideoSection";
import { getDictionary } from "@/dictionaries";
import CallToAction from "@/ui/CallToAction";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  const title =
    dict?.metadata?.home?.title ||
    "HBrothers - Supplying Essential Goods with Integrity";

  const description =
    dict?.metadata?.home?.description ||
    "HBrothers is a trusted trading and investment company in essential consumer goods. We lead in supply chain excellence with global partnerships.";

  return {
    title,
    description,
    keywords: [
      "HBrothers",
      "essential goods",
      "food supply",
      "logistics",
      "distribution",
      "trading company",
    ],
    alternates: {
      canonical: `https://hbrothersinvestment.com/${locale}`,
      languages: {
        en: "https://hbrothersinvestment.com/en",
        ar: "https://hbrothersinvestment.com/ar",
      },
    },
    openGraph: {
      title,
      description,
      url: `https://hbrothersinvestment.com/${locale}`,
      siteName: "HBrothers",
      images: [
        {
          url: "https://hbrothersinvestment.com/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "HBrothers Logo and Distribution",
        },
      ],
      locale: locale === "ar" ? "ar_EG" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["https://hbrothersinvestment.com/og-image.jpg"],
    },
    icons: {
      icon: "/favicon.ico",
    },
  };
}

export default async function Home({ params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <main>
      <HeroSection dict={dict} />
      <VideoSection dict={dict} />
      <AboutSection dict={dict} />
      <DefinitionSection dict={dict} />
      <ServicesSection dict={dict} header={dict.navigation.goods} />
      <TestimonialsSection dict={dict} />
      <CallToAction dict={dict} />
    </main>
  );
}
