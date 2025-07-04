import { getDictionary } from "@/dictionaries";
import ProductsClient from "@/components/productsPage/ProductsClient";

const ProductsPage = async ({ params }) => {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return <ProductsClient dict={dict} locale={locale} />;
};

export default ProductsPage;
