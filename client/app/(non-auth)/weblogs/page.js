import PageTop from "@/components/PageTop"
import Pagination from "@/components/Pagination"
import WeblogHome from "@/components/WeblogHome"

const Weblogs = async ({ searchParams }) => {
    const base_url = process.env.NEXT_PUBLIC_BASE_URL_FRONT //http://localhost:8080
    const currentPage = (await searchParams.page) || 1;

    const res = await fetch(`${base_url}/api/blogs?page=${currentPage}`, { next: { revalidate: 60 } })


    if (!res.ok) {
        console.log('Error Fetching Blogs');
        throw new Error('Error Fetching Blogs');
    }

    const data = await res.json();
    console.log(data);

    return (
        <div style={{ 'paddingTop': '100px', minHeight: '100vh' }}>
            <PageTop
                img='images/منو تشریفات عروسی.jpeg'
                title={'وبلاگ های تشریفات عروسی فاووایونت'}
                link={'/weblogs'}
            />
            <main className="max-w-[1200px] mx-auto">

                <div className="grid md:grid-cols-2 md:gap-8 md:p-8 sm:grid-cols-2 sm:gap-4 sm:p-4 p-4 gap-4 lg:grid-cols-3 md:grid-cold-2 lg:gap-3 xl:gap-4 mt-10">
                    {
                        data.blogs.map((blog, index) => (
                            <WeblogHome
                                key={blog._id}
                                blogSlug={blog.slug}
                                title={blog.title}
                                thumbnail={blog.thumbnail}
                                brief={blog.brief}
                                date={blog.createdAt}
                                number={index + 1}
                            />
                        ))
                    }
                </div>
                {
                    data.numberOfAllBlogs > 8 && (
                        <div className="mt-4">
                            <Pagination data={data} currentPage={currentPage} />

                        </div>
                    )
                }


            </main>



        </div>
    )
}

export default Weblogs