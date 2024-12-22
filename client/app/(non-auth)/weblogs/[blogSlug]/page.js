import TableOfContents from "@/components/TableOfContents";
import { extractHeadings } from "@/utils/extractHeadings";
import styles from './singleBlog.module.css'
import './singleBlog.css'
import { CalendarIcon } from "@heroicons/react/24/outline";

import BlogLeftbar from "@/components/BlogLeftbar";
import Link from "next/link";
import { formatDate2 } from "@/utils/jalali";


const base_url = process.env.BASE_URL


//SCHEMA MARKUP AND META TAGS
export async function generateMetadata({ params }) {
  const { blogSlug } = await params;

  const res = await fetch(`${base_url}/api/blog/${blogSlug}`);

  if (!res.ok) {
    console.log(res);
    throw new Error("Failed to fetch blog data");
  }

  const blog = await res.json();
  const company = "تشریفات عروسی فاوو ایونت"

  //Define JSON-LD Schema
  const blogSchema = [
    {
      "@context": "https://schema.org", //Weblog Schema
      "@type": "BlogPosting",
      "headline": blog.title,
      "description": blog.brief || "خلاصه‌ای از مقاله",
      "datePublished": blog.createdAt,
      // "dateModified": blog.updatedAt || blog.publishedAt,
      "dateModified": blog.createdAt,
      "author": {
        "@type": "Person",
        // "name": blog.author || "نام نویسنده"
        "name": blog.author || "امیررضا نوری"
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `${base_url}/weblogs/${blogSlug}`
      },
      "image": {
        "@type": "ImageObject",
        "url": `${base_url}${blog.thumbnail}`
      }
    },
    {
      "@context": "https://schema.org", // Faq Schema
      "@type": "FAQPage",
      "mainEntity": blog.faqs?.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    },
    {
      "@context": "https://schema.org", //Breadcrumb Schema
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "خانه",
          "item": `${base_url}/`
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "وبلاگ",
          "item": `${base_url}/weblogs`
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": blog.title,
          "item": `${base_url}/weblogs/${blogSlug}`
        }
      ]
    },
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
    title: blog.title,
    description: blog.brief,
    keywords: blog.keywords,
    other: {
      "script:ld+json": JSON.stringify(blogSchema),
      "link:canonical": `${base_url}/weblogs/${blogSlug}`,
      "meta:og:title": blog.title,
      "meta:og:description": blog.brief,
      "meta:og:image": `${base_url}${blog.thumbnail}`,
      "meta:og:url": `${base_url}/weblogs/${blogSlug}`,
      "meta:og:type": "article",
      "meta:twitter:card": "summary_large_image",
      "meta:twitter:title": blog.title,
      "meta:twitter:description": blog.brief,
      "meta:twitter:image": `${base_url}${blog.thumbnail}`,
      "meta:twitter:url": `${base_url}/weblogs/${blogSlug}`,
    }
  }
}




const SingleBlog = async ({ params }) => {

  const { blogSlug } = await params

  const res = await fetch(`${base_url}/api/blog/${blogSlug}`);
  if (!res.ok) {
    console.log(res);
    throw new Error("Failed to fetch blog data");
  }
  const blog = await res.json()
  console.log(blog);

  const headings = extractHeadings(blog.content)



  return (

    <>

      <div className=" single-blog-cont flex flex-col md:flex md:flex-row gap-4 md:gap-2 xl:gap-4 mx-3 md:mx-auto mt-28 md:mt-28  ">

        {/* main  */}
        <main className=" xl:p-8 w-full md:w-8/12 lg:w-8/12  xl:rounded-3xl rounded-xl lg:rounded-xl md:rounded-xl bg-headerSubmenu">
          <div
            className={`w-full h-48 bg-cover bg-center rounded-xl relative mb-3 xl:mb-4 sm:mb-6 `}
            style={{ backgroundImage: `url(${base_url}${blog.thumbnail})` }}
          >

            <div className=" flex justify-center flex-col items-center bg-black bg-opacity-70 absolute w-full h-full rounded-2xl  p-4 ">
              <h1 className="rounded-2xl text-white block max-w-md ">
                {blog.title}
              </h1>

              <div className="publish-date ">
                <CalendarIcon className={`w-3 text-white`} />
                <span className="text-white text-sm ">
                  {formatDate2(blog.createdAt)}
                </span>

              </div>

            </div>
          </div>

          <ul className="breadcrumb mb-3 xl:mb-4 sm:mb-6 bg-slate-800  ">
            <li><Link href="/"> خانه /</Link></li>
            <li><Link href={`/weblogs`}> وبلاگ ها /</Link></li>
            <li className="active_breadcrumb">{blog.title}</li>
          </ul>
          {/* --------------Table Of Content-------------- */}
          <TableOfContents headings={headings} />

          {/* --------------Main Article-------------- */}
          <article
            className={`text-white ${styles['main-content']}`}
            dangerouslySetInnerHTML={{ __html: blog.content }}

          />

          {/* --------------FAQ-------------- */}
          <section className="faq">
            <hr className="my-8" style={{ borderColor: 'rgb(131 130 130)' }} />
            <span className="text-white mb-3 mr-1 mt-7 block">
              سوالات شما
            </span>
            <ul >
              {
                blog.faqs.map((item, index) => (

                  <div
                    className={`${blog.faqs.length !== index + 1 ? 'mb-4' : ''}`}
                    key={index}
                  >
                    <li className="faq-q" style={{ color: 'rgb(216 247 255)' }}>
                      {item.question}
                    </li>
                    <li style={{ color: '#CACACA' }} className="faq-a mt-3">
                      {item.answer}
                    </li>
                  </div>

                ))
              }
            </ul>
          </section>
        </main>

        {/* SideBar */}
        <BlogLeftbar blogSlug={blogSlug} />

      </div>
    </>
  )
}

export default SingleBlog