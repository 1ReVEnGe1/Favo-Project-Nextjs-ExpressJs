import Image from "next/image";
import Link from "next/link";
import BlogService from "./BlogService";


const BlogSidebar = async ({ blogId }) => {
    const base_url = process.env.BASE_URL

    const res = await fetch(`${base_url}/api/blogs/latest?excludeId=${blogId}`);
    if (!res.ok) {
        console.log(res);
    }

    const latest_blogs = await res.json()

    return (
        <aside style={{ position: 'sticky', bottom: '10px' }} className=" w-2/6 rounded-3xl  " >
            <section className="py-3 px-4 rounded-xl" style={{ 'backgroundColor': 'rgb(26 34 45)' }} >
                <span className="text-white">آخرین مطالب عروسی</span>
            </section>
            <section className="mt-4">
                {
                    latest_blogs.map(blog => (
                        <Link href={`/weblogs/${blog._id}`} className="mb-4 py-4 px-4 h-24 rounded-xl bg-headerSubmenu flex " key={blog._id}>
                            <div className="w-3/12">
                                <Image
                                    src={`${base_url}${blog.thumbnail}`}
                                    width={80}
                                    height={80}
                                    alt={`${blog.title}`}
                                    style={{ borderRadius: '12px',height:'100%',maxHeight:'90px', objectFit:'cover' }}
                                />
                            </div>
                            <div className="w-9/12">
                                <h3 style={{ fontSize: '15px',fontFamily:'RokhFaSemiBold' }} className="text-gray-50">{blog.title}</h3>
                                <p className="text-gray-300 mt-2" style={{ 'fontSize': '12px' }} >
                                    {blog.brief.length > 100 ? blog.brief.slice(0 , 100) + '...' : blog.brief}
                                    {console.log(blog.brief.length)}
                                    
                                </p>

                            </div>
                        </Link>
                    ))
                }
            </section>
            <section className="sticky top-28">
                <section className="py-3 px-4 rounded-xl " style={{ 'backgroundColor': 'rgb(26 34 45)' }} >
                    <span className="text-white">خدمات ما</span>
                </section>
                <section className="mt-4 bg-headerSubmenu rounded-xl p-4" >


                    <BlogService
                        title={'دیزاین دکوراسیون مراسم'}
                        src={'/images/decoration/دکوراسیون عروسی تشریفات فاوو ایونت.webp'}
                    />



                    <div style={{ 'marginTop': '16px' }}>
                        <BlogService
                            title={'گل آرایی'}
                            src={'/images/flowerDecoration/گل آرایی عروسی.webp'}
                        />
                    </div>

                    <div style={{ 'marginTop': '16px' }}>
                        <BlogService
                            title={'تیم باریستا و بارتندر'}
                            src={'/images/bar/نوشیدنی سرد عروسی فاوو ایونت .webp'}
                        />
                    </div>

                    <div style={{ 'marginTop': '16px' }}>
                        <BlogService
                            title={'فینگر فود'}
                            src={'/images/fingerfoods/فینگرفود تشریفاتی فاوو ایونت.webp'}
                        />
                    </div>

                    <div style={{ 'marginTop': '16px' }}>
                        <BlogService
                            title={'دیجی و موسیقی زنده'}
                            src={'/images/music/اجرای موسیقی زنده تشریفات فاوو ایونت.webp'}
                        />
                    </div>


                </section>
            </section>

        </aside>
    )
}

export default BlogSidebar


