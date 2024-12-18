'use client'

import { debounce } from "@/utils/debounce";
import { useCallback, useState } from "react"
import { useRouter } from "next/navigation";


const base_url = process.env.NEXT_PUBLIC_BASE_URL_FRONT

const SearchBox = () => {
    const [text, setText] = useState('');
    const [blogs, setBlogs] = useState([]);

    const [loading, setLoading] = useState(false)

    const router = useRouter()

    const fetchSearchedBlogs = async (query) => {
        

        const url = `${base_url}/api/blogs/search?query=${query}&limit=2`;

        const res = await fetch(url);
        

        if (!res.ok) {
            throw new Error('Error Fetching Blogs');
        }

        const blogsList = await res.json()
        console.log(blogsList);
        setBlogs(blogsList);

        setLoading(false); //set loading false
    }


    const debouncedFetchResults = useCallback(
        debounce((value) => {
            if (value.trim()) {
                setText(value);
                fetchSearchedBlogs(value)
            } else {
                setLoading(false); //set loading false
                setBlogs([])
            }
        }, 1000)
        , []);


    const handleSearch = (e) => {
        setLoading(true); //set loading true
        setText(e.target.value);
        debouncedFetchResults(e.target.value);
    }

    return (
        <section>
            <input
                type="text"
                placeholder="جستجو وبلاگ"
                value={text}
                onChange={handleSearch}
            />
            {loading && <p className="text-red-500 font-bold">LOADING...</p>}

            {
                blogs.length > 0 && (
                    <ul>
                        {blogs.slice(0, 2).map(blog => (

                            <li
                                key={blog._id}
                                onClick={() => router.push(`/weblogs/${blog.slug}`)}
                                className="text-blue-400"
                            >
                                {blog.title}
                            </li>

                        ))}
                    </ul>
                )
            }

        </section>
    )
}

export default SearchBox