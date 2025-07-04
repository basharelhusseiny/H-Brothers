import AboutSection from "@/components/HomePage/AboutSection";
import HeroSection from "@/components/HomePage/HeroSection";
import ServicesSection from "@/components/HomePage/ServicesSection";
import TestimonialsSection from "@/components/HomePage/TestimonialsSection";
import VideoSection from "@/components/HomePage/VideoSection";
import { getDictionary } from "@/dictionaries";

export default async function Home({ params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <main>
      <HeroSection dict={dict} />
      <VideoSection dict={dict} />
      <AboutSection dict={dict} />
      <ServicesSection dict={dict} header={dict.sectionTitle}/>
      <TestimonialsSection dict={dict} />
    </main>
  );
}
