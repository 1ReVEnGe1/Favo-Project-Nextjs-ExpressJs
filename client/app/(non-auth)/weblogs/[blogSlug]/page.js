import TableOfContents from "@/components/TableOfContents";
import { extractHeadings } from "@/utils/extractHeadings";
import styles from './singleBlog.module.css'
import './singleBlog.css'


import BlogLeftbar from "@/components/BlogLeftbar";




const SingleBlog = async ({ params }) => {

  const { blogSlug } = await params
  // const title = await params.blogTitle;
  const base_url = process.env.BASE_URL

  const res = await fetch(`${base_url}/api/blog/${blogSlug}`);
  if (!res.ok) {
    console.log(res);
  }
  const blog = await res.json()

  const headings = extractHeadings(blog.content)

 

  return (

    <>
  
    <div style={{ 'marginTop': '150px', 'maxWidth': '1200px' }} className=" flex gap-4 mx-auto">

      {/* main  */}
      <main className="w-8/12 bg-headerSubmenu p-6 rounded-3xl">
        <div
          className={`w-full h-48 bg-cover bg-center rounded-xl relative mb-10`}
          style={{ backgroundImage: `url(${base_url}${blog.thumbnail})` }}
        >
          <div className=" flex justify-center items-center bg-black bg-opacity-55 absolute w-full h-full rounded-2xl ">
            <h1
              style={{
                'fontFamily': 'RokhFaBold',
                'fontSize': '22px',
                'lineHeight': '2.15rem'
              }}
              className=" p-4 rounded-2xl text-white font-bold"
            >
              {blog.title}
            </h1>
          </div>
        </div>


        {/* --------------Table Of Content-------------- */}
        <TableOfContents headings={headings} />

        {/* --------------Main Article-------------- */}
        <article
          className={`text-white ${styles['main-content']}`}
          dangerouslySetInnerHTML={{ __html: blog.content }}

        />

        {/* --------------FAQ-------------- */}
        <section>
          <hr className="my-8" style={{ borderColor: 'rgb(131 130 130)' }} />
          <span className="text-white mb-3 text-lg font-bold mt-7 block">
            سوالات شما
          </span>
          <ul >
            {
              blog.faqs.map((item, index) => (

                <div style={{
                  borderRadius: '12px',
                  background: 'linear-gradient(to bottom, #212121, #2E2E2E)',
                  padding: '20px',
                  border: '1px solid #323232',
                }}
                  className={`${blog.faqs.length !== index + 1 ? 'mb-4' : ''}`}
                  key={index}
                >
                  <li style={{ color: 'rgb(216 247 255)' }}>
                    {item.question}
                  </li>
                  <li style={{ color: '#CACACA', fontSize: '13px' }} className="mt-3">
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