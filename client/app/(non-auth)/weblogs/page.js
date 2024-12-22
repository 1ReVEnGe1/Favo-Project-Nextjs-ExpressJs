import PageTop from "@/components/PageTop"
import WeblogHome from "@/components/WeblogHome"

const Weblogs = async () => {
    const base_url = process.env.BASE_URL
    const res = await fetch(`${base_url}/api/blogs?page=1` , {next: {revalidate:60}})
    

    if (!res.ok) {
        console.log('Error Fetching Blogs');
        throw new Error('Error Fetching Blogs');
    }

    const data = await res.json()
    
    return (
        <div style={{ 'paddingTop': '100px',minHeight:'100vh' }}>
            <PageTop
                img='images/منو تشریفات عروسی.jpeg'
                title={'وبلاگ های تشریفات عروسی فاووایونت'}
                link={'/weblogs'}
            />
            <main className="max-w-[1200px] mx-auto">
                
                <div className="grid grid-cols-3 gap-4 mt-8 ">
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
            </main>



        </div>
    )
}

export default Weblogs