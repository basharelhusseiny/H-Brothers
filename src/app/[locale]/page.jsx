import HeroSection from "@/components/HomePage/HeroSection";
import { getDictionary } from "@/dictionaries";

export default async function Home({ params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <main>
      <HeroSection dict={dict} />
    </main>
  );
}
