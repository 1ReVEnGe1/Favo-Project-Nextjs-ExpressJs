import AboutHome from "../../components/AboutHome";
import BigTitle from "../../components/BigTitle";
import Cards from "../../components/Cards";
import Design from "../../components/Design";
import LocationsHome from "../../components/LocationsHome";
import ServicesHome from "../../components/ServicesHome";
import Slider from "../../components/Slider";
import WhyFavo from "../../components/WhyFavo";
import WeblogSection from "../../components/WeblogSection";
import Design2 from "@/components/Design2";

const base_url = process.env.BASE_URL

export async function generateMetadata({ params }) {
  

  const title = "تشریفات عروسی فاوو ایونت 💍 | برگزارکننده مراسم های عروسی، عقد، نامزدی و بله برون"
  const description = "تشریفات عروسی فاووایونت، بهترین انتخاب برای شما که خاص پسند هستید.ارائه خدمات کامل برکزاری مراسم های عروسی، عقد، نامزدی و بله برون ژورنالی و لوکس"
  const company = "تشریفات عروسی فاوو ایونت"

  //Define JSON-LD Schema
  const SchemaData = [
    
    {
      "@context": "https://schema.org", //Service 1 Schema
      "@type": "Service",
      "serviceType": "دیزاین دکوراسیون مراسم",
      "provider": {
        "@type": "Organization",
        "name": company
      },
      "url": `${base_url}/services/decoration`,
      "image": {
        "@type": "ImageObject",
        "url": `${base_url}/images/decoration/دکوراسیون عروسی تشریفات فاوو ایونت.webp`
      },
      "description": "دیزاین دکوراسیون مراسم خاص و منحصر به فرد برای عروسی‌ها."
    },
    {
      "@context": "https://schema.org", //Service 2 Schema
      "@type": "Service",
      "serviceType": "گل آرایی",
      "provider": {
        "@type": "Organization",
        "name": company
      },
      "url": `${base_url}/services/flower-arrangement`,
      "image": {
        "@type": "ImageObject",
        "url": `${base_url}/images/flowerDecoration/گل آرایی عروسی.webp`
      },
      "description": "گل‌آرایی حرفه‌ای برای تمامی مراسم‌های شما."
    },
    {
      "@context": "https://schema.org", //Service 3 Schema
      "@type": "Service",
      "serviceType": "تیم باریستا و بارتندر",
      "provider": {
        "@type": "Organization",
        "name": company
      },
      "url": `${base_url}/services/barista-bartender`,
      "image": {
        "@type": "ImageObject",
        "url": `${base_url}/images/bar/نوشیدنی سرد عروسی فاوو ایونت .webp`
      },
      "description": "تیم باریستا و بارتندر حرفه‌ای برای انواع نوشیدنی‌ها."
    },
    {
      "@context": "https://schema.org", //Service 4 Schema
      "@type": "Service",
      "serviceType": "فینگرفود",
      "provider": {
        "@type": "Organization",
        "name": company
      },
      "url": `${base_url}/services/finger-foods`,
      "image": {
        "@type": "ImageObject",
        "url": `${base_url}/images/fingerfoods/فینگرفود تشریفاتی فاوو ایونت.webp`
      },
      "description": "فینگرفودهای خوشمزه و متنوع برای مراسم‌های شما."
    },
    {
      "@context": "https://schema.org", //Service 5 Schema
      "@type": "Service",
      "serviceType": "دیجی و موسیقی زنده",
      "provider": {
        "@type": "Organization",
        "name": company
      },
      "url": `${base_url}/services/live-music-dj`,
      "image": {
        "@type": "ImageObject",
        "url": `${base_url}/images/music/اجرای موسیقی زنده تشریفات فاوو ایونت.webp`
      },
      "description": "اجرای موسیقی زنده و دیجی حرفه‌ای برای مراسم‌های شما."
    }
  ]

  return {
    title: title,
    description: description,
    keywords: 'تشریفات عروسی, تشریفات عروسی لوکس, تشریفات عروسی در تهران, برگزاری عروسی لوکس, بهترین تشریفات مراسم عروسی در تهران',
    other: {
      "script:ld+json": JSON.stringify(SchemaData),
      "link:canonical": `${base_url}`,
      "meta:og:title": title,
      "meta:og:description": description,
      "meta:og:image": ``,
      "meta:og:url": `${base_url}`,
      "meta:og:type": "website",
      "meta:twitter:card": "summary_large_image",
      "meta:twitter:title": title,
      "meta:twitter:description": description,
      "meta:twitter:image": `${base_url}`,
      "meta:twitter:url": `${base_url}`,
    }
  }
}



export default function Home() {
  return (
    <>
      
      <Slider />
      <Cards />
      <BigTitle bigTitle='ABOUT' />
      <AboutHome />
      <WhyFavo />
      <BigTitle bigTitle='DESIGN' />
      {/* <Design /> */}
      <Design2 />
      <BigTitle bigTitle='SERVICES' />
      <ServicesHome />
      <BigTitle bigTitle='LOCATIONS' />
      <LocationsHome />
      <BigTitle bigTitle='WEBLOGS' />
      <WeblogSection />
      
    </>
  );
}
