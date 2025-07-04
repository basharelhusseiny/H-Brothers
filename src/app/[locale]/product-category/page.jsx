import { getDictionary } from "@/dictionaries";
import ProductsClient from "@/components/productsPage/ProductsClient";
import TestimonialsSection from "@/components/HomePage/TestimonialsSection";

const ProductsPage = async ({ params }) => {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <>
      <ProductsClient dict={dict} locale={locale} />
      <div className="mt-32">
        <TestimonialsSection dict={dict} />
      </div>
    </>
  );
};

export default ProductsPage;
