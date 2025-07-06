// app/[locale]/layout.jsx

import { Cairo, Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import MobileMenuProvider from "@/context/MobileMenuContext";
import FixedButtons from "@/ui/FixedButtons";

// تحميل الخطوط
const roboto = Roboto({ subsets: ["latin"], display: "swap" });
const cairo = Cairo({ subsets: ["arabic"], display: "swap" });

export const metadata = {
  title: "HBrothers - Passionate About People and Food Supply",
  description:
    "HBrothers is a trusted trading and investment company in essential consumer goods. We lead in supply chain excellence with integrity and strong global partnerships.",
  keywords: [
    "HBrothers",
    "food supply",
    "consumer goods",
    "import and distribution",
    "logistics company",
    "essential products",
    "retail",
    "trading company",
    "supply chain",
  ],
  openGraph: {
    title: "HBrothers - Passionate About People and Food Supply",
    description:
      "Reliable import and distribution of essential consumer goods. Discover our vision, mission, and quality products.",
    url: "https://hbrothersinvestment.com/",
    siteName: "HBrothers",
    images: [
      {
        url: "https://hbrothersinvestment.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "HBrothers Logo and Product Distribution",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HBrothers - Passionate About People and Food Supply",
    description:
      "Leading importer and distributor of essential consumer goods with global reach and local impact.",
    images: ["https://hbrothersinvestment.com/twitter-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: `https://hbrothersinvestment.com/`,
    languages: {
      en: "https://hbrothersinvestment.com/en",
      ar: "https://hbrothersinvestment.com/ar",
    },
  },
};

export default async function RootLayout({ children, params }) {
  const { locale } = await params;
  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body
        className={`${
          locale === "ar" ? cairo.className : roboto.className
        } antialiased min-h-screen flex flex-col`}
      >
        <MobileMenuProvider>
          <Header locale={locale} />
          <main className="flex-grow mt-[72px]">{children}</main>
          <Footer locale={locale} />
          <FixedButtons />
        </MobileMenuProvider>
      </body>
    </html>
  );
}
