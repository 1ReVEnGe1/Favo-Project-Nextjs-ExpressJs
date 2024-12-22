
import WeblogHome from "./WeblogHome"
import './WeblogSection.css'


const WeblogSection = async () => {
    const base_url = process.env.BASE_URL

    const res = await fetch(`${base_url}/api/blogs/latest` , {next : {revalidate: 60}} )
    const blogs = await res.json()
    
    if (res.ok) {
        console.log(blogs);
    }

    return (
        <div className="weblog-home-section-cont lg:p-5 sm:p-3 p-3 ">
            <div>
                <h2 className="mt-14 text-white text-4xl text-center ">آخرین وبلاگ ها</h2>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 xl:gap-8 lg:gap-5 sm:gap-3 mt-8 weblog-home-section">
                {
                    blogs.map((blog, index) => (
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
        </div>
    )
}

export default WeblogSection

