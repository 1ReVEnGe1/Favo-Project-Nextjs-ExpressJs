import TableOfContents from "@/components/TableOfContents";
import { extractHeadings } from "@/utils/extractHeadings";
import styles from './singleBlog.module.css'
import BlogSidebar from "@/components/BlogSidebar";

const SingleBlog = async ({ params }) => {

  const { blogTitle } = await params
  // const title = await params.blogTitle;
  const base_url = process.env.BASE_URL

  const res = await fetch(`${base_url}/api/blog/${blogTitle}`);
  if (!res.ok) {
    console.log(res);
  }
  const blog = await res.json()
  console.log(blog);

  const headings = extractHeadings(blog.content)

  console.log(blog.faqs.length)


  return (
    <div style={{ 'marginTop': '150px', 'maxWidth': '1200px' }} className=" flex gap-4 mx-auto">
      <main className="w-4/6 bg-headerSubmenu p-6 rounded-3xl">
        <h1
          style={{
            'border': '1px solid rgb(56 56 56)',
            'backgroundColor': 'rgb(26 34 45)',
            'fontFamily': 'RokhFaBold',
            'fontSize': '22px',
            'lineHeight': '2.15rem'
          }}
          className=" p-4 rounded-2xl text-white font-bold mb-4"
        >
          {blog.title}
        </h1>

        <TableOfContents headings={headings} />


        {/* --------------Main Article-------------- */}
        <article
          className={`text-white ${styles['main-content']}`}
          dangerouslySetInnerHTML={{ __html: blog.content }}

        />

        {/* --------------FAQ-------------- */}
        <section>
          <hr className="my-8" style={{borderColor:'rgb(131 130 130)'}} />
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
                  border:'1px solid #323232',
                }}
                  className={`${blog.faqs.length !== index + 1 ? 'mb-4' : ''}`}
                  key={index}
                >
                  <li style={{color:'#E1D79A'}}>
                    {item.question}
                  </li>
                  <li style={{color:'#CACACA', fontSize:'13px'}} className="mt-3">
                    {item.answer}
                  </li>
                </div>

              ))
            }
          </ul>
        </section>
      </main>

      <BlogSidebar blogId={blogTitle} />

    </div>
  )
}

export default SingleBlog