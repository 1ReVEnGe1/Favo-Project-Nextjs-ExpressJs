import Image from "next/image";
import Link from "next/link";
import BlogService from "./BlogService";
import SearchBox from "./SearchBox";
import './BlogLeftbar.css'

const base_url = process.env.NEXT_PUBLIC_BASE_URL_FRONT

const BlogLeftbar = async ({ blogSlug }) => {

    const res = await fetch(`${base_url}/api/blogs/latest?excludeSlug=${blogSlug}`);
    if (!res.ok) {
        console.log('errorrrrr: ', res);
        throw new Error(res)
    }

    const latest_blogs = await res.json()

    return (
        <aside className="w-full xl:w-4/12 md:w-4/12 rounded-3xl md:sticky md:top-3 md:mx-0 mb-8" >

            <SearchBox />
            <div className="sm:flex md:block gap-4 sm:gap-2">

                <section className="sm:w-6/12 md:w-full">

                    <section className=" py-3 px-3 sm:px-2 sm:py-2  md:px-2 xl:px-3 md:py-2 rounded-xl md:rounded-md text-xs sm:text-xs md:text-xs xl:text-sm " style={{ 'backgroundColor': 'rgb(30 41 59)' }} >
                        <span className="text-white">آخرین مطالب عروسی</span>
                    </section>

                    <section className="mt-3 sm:mt-2 md:mt-2 xl:mt-4">
                        {
                            latest_blogs.map(blog => (
                                <Link href={`/weblogs/${blog.slug}`} className="weblog-blog-latest-card mb-3 sm:mb-2 md:mb-2 p-3 sm:p-2 md:p-2 xl:p-3 xl:mb-4 min-h-24  rounded-xl bg-headerSubmenu flex gap-2" key={blog._id}>
                                    <div className="w-3/12">
                                        <Image
                                            src={`${base_url}${blog.thumbnail}`}
                                            width={80}
                                            height={80}
                                            alt={`${blog.title}`}
                                            style={{ borderRadius: '12px', height: '100%', maxHeight: '90px', objectFit: 'cover' }}
                                        />
                                    </div>
                                    <div className="w-9/12">
                                        <h3  className="text-white">
                                            {blog.title.length > 40 ? blog.title.slice(0, 40) + '...' : blog.title}
                                        </h3>
                                        <p className="text-gray-300 mt-2 md:mt-1 xl:mt-3 "  >
                                            {blog.brief.length > 80 ? blog.brief.slice(0, 80) + '...' : blog.brief}
                                            {console.log(blog.brief.length)}

                                        </p>

                                    </div>
                                </Link>
                            ))
                        }
                    </section>

                </section>

                <section className="sm:w-6/12  md:w-full " >
                    <section className=" py-3 px-3 sm:px-2 sm:py-2  md:px-2 xl:px-3 md:py-2 rounded-xl md:rounded-md text-xs sm:text-xs md:text-xs xl:text-sm" style={{ 'backgroundColor': 'rgb(30 41 59)' }} >
                        <span className="text-white">خدمات ما</span>
                    </section>
                    <section className="mt-3 sm:mt-2 md:mt-2 xl:mt-4 bg-headerSubmenu rounded-xl p-3 sm:p-2 md:p-2 xl:p-3 space-y-3 sm:space-y-2 xl:space-y-3 " >


                        <BlogService
                            title={'دیزاین دکوراسیون مراسم'}
                            src={'/images/decoration/دکوراسیون عروسی تشریفات فاوو ایونت.webp'}
                        />



                        <div >
                            <BlogService
                                title={'گل آرایی'}
                                src={'/images/flowerDecoration/گل آرایی عروسی.webp'}
                            />
                        </div>

                        <div >
                            <BlogService
                                title={'تیم باریستا و بارتندر'}
                                src={'/images/bar/نوشیدنی سرد عروسی فاوو ایونت .webp'}
                            />
                        </div>

                        <div >
                            <BlogService
                                title={'فینگر فود'}
                                src={'/images/fingerfoods/فینگرفود تشریفاتی فاوو ایونت.webp'}
                            />
                        </div>

                        <div >
                            <BlogService
                                title={'دیجی و موسیقی زنده'}
                                src={'/images/music/اجرای موسیقی زنده تشریفات فاوو ایونت.webp'}
                            />
                        </div>


                    </section>
                </section>
            </div>


        </aside>
    )
}

export default BlogLeftbar;


