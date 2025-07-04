"use client";

import productsData from "@/data/products";
import Link from "next/link";
import { useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import Image from "next/image";

const ProductsClient = ({ dict, locale }) => {
  const PRODUCTS_PER_PAGE = 16;

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const isArabic = locale === "ar";

  const categorySlugs = ["all", ...productsData.map((product) => product.slug)];

  const allProducts = productsData.flatMap((category) =>
    category.items.map((item) => ({
      ...item,
      category: category.slug,
    }))
  );

  const filteredProducts =
    selectedCategory === "all"
      ? allProducts
      : allProducts.filter((product) => product.category === selectedCategory);

  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE
  );

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  return (
    <div>
      {/* Header */}
      <div
        className="relative text-center py-10 uppercase"
        style={{
          backgroundImage: "url('/images/services/DSC09917.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/50 z-0" />
        <div className="relative z-10">
          <h1 className="text-5xl max-sm:text-3xl font-light tracking-wider text-white">
            {dict.productsPage.products}
          </h1>
          <div className="flex items-center justify-center mt-4 max-sm:mt-3 text-xs space-x-1 text-white">
            <Link href="/" className="hover:text-red-800 duration-300">
              {dict.productsPage.home}
            </Link>
            {isArabic ? <IoIosArrowBack /> : <IoIosArrowForward />}
            <Link
              href="/product-category"
              className="text-white hover:text-red-800 duration-300"
            >
              {dict.productsPage.products}
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-5">
        {/* Category Filter */}
        <div className="my-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {categorySlugs.map((slug) => (
              <button
                key={slug}
                onClick={() => handleCategoryChange(slug)}
                className={`px-5 py-2 capitalize rounded-md text-sm font-medium transition-colors ${
                  selectedCategory === slug
                    ? "bg-red-800 text-white"
                    : "bg-gray-100 hover:bg-gray-200 border border-gray-300"
                }`}
              >
                {slug === "all"
                  ? dict.productsPage.all
                  : dict.productsPage.categoryNames[slug] || slug}
                <span className="mx-2 bg-white text-red-800 px-2 py-0.5 rounded-full text-xs">
                  {slug === "all"
                    ? allProducts.length
                    : allProducts.filter((product) => product.category === slug)
                        .length}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Products Bar */}
        <div className="flex flex-wrap items-center justify-between bg-gray-100 border border-gray-200 rounded-lg px-4 py-3 mb-6 shadow-sm">
          <span className="text-2xl font-semibold tracking-wide text-red-800 capitalize">
            {selectedCategory === "all"
              ? dict.productsPage.all
              : dict.productsPage.categoryNames[selectedCategory] ||
                selectedCategory}
          </span>
          <span className="text-gray-600">
            {dict.productsPage.showing}{" "}
            <span className="text-red-800 font-semibold">
              {filteredProducts.length}
            </span>{" "}
            {dict.productsPage.products.toLowerCase()}
          </span>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10">
          {paginatedProducts.map((product) => (
            <div
              key={`${product.category}-${product.id}`}
              className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-32 w-full">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-2"
                />
                {!product.inStock && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {dict.productsPage.out_of_stock}
                    </span>
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {product.name}
                </h3>
                <div className="flex justify-between items-center mt-4">
                  <span className="capitalize text-sm text-gray-500">
                    {dict.productsPage.categoryNames[product.category] ||
                      product.category}
                  </span>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      product.inStock
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {product.inStock
                      ? dict.productsPage.in_stock
                      : dict.productsPage.out_of_stock}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 my-8">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 text-gray-700 disabled:opacity-50"
            >
              {dict.productsPage.prev}
            </button>
            {[...Array(totalPages)].map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentPage(idx + 1)}
                className={`px-3 py-1 rounded ${
                  currentPage === idx + 1
                    ? "bg-red-800 text-white"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                }`}
              >
                {idx + 1}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 text-gray-700 disabled:opacity-50"
            >
              {dict.productsPage.next}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsClient;
