'use client'

import { debounce } from "@/utils/debounce";
import { useCallback, useState } from "react"

import './SearchBox.css'
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

const base_url = process.env.NEXT_PUBLIC_BASE_URL_FRONT

const SearchBox = () => {
    const [text, setText] = useState('');
    const [blogs, setBlogs] = useState([]);

    const [loading, setLoading] = useState(false)

    const router = useRouter()

    const fetchSearchedBlogs = async (query) => {


        const url = `${base_url}/api/blogs/search?query=${query}&limit=4`;

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
        , [fetchSearchedBlogs]);


    const handleSearch = (e) => {
        setLoading(true); //set loading true
        setText(e.target.value);
        debouncedFetchResults(e.target.value);
    }

    const handleEnterBtn = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            router.push(`/search?query=${text}`)
        }
    }

    return (
        <>
            <div className="relative mt-12 md:mt-0">
                <input
                    type="text"
                    placeholder="جستجو وبلاگ"
                    value={text}
                    onChange={handleSearch}
                    className="search-input "
                    onKeyDown={handleEnterBtn}
                />
                <span className="z-10 block w-fit absolute top-2 right-1 sm:top-1 md:top-1">
                    <svg className="w-8 p-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path d="M21.2929 22.7071C21.6834 23.0976 22.3166 23.0976 22.7071 22.7071C23.0976 22.3166 23.0976 21.6834 22.7071 21.2929L21.2929 22.7071ZM17 10C17 13.866 13.866 17 10 17V19C14.9706 19 19 14.9706 19 10H17ZM10 17C6.13401 17 3 13.866 3 10H1C1 14.9706 5.02944 19 10 19V17ZM3 10C3 6.13401 6.13401 3 10 3V1C5.02944 1 1 5.02944 1 10H3ZM10 3C13.866 3 17 6.13401 17 10H19C19 5.02944 14.9706 1 10 1V3ZM14.7929 16.2071L21.2929 22.7071L22.7071 21.2929L16.2071 14.7929L14.7929 16.2071Z" fill="#ffffff"></path>
                        </g>
                    </svg>
                </span>
            </div>

            <div

                style={{ background: `linear-gradient(45deg, rgb(26 33 45), #164759)` }}
                className={`rounded-xl mb-4  ${ text  ? 'block' : 'hidden'} `}
            >
                {loading && (
                    <div role="status" className="py-2">
                        <svg aria-hidden="true" className="h-8 w-full text-gray-200 animate-spin dark:text-gray-600 fill-secondary text-center" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                        </svg>
                        <p style={{ fontSize: '14px', fontFamily: 'RokhFaThin' }} className="text-white text-center font-bold mb-2 mt-2"> صبر کنید...</p>
                    </div>
                )}

                {
                    blogs?.length > 0 && (
                        <section className="mb-4 w-full ">

                            {blogs.slice(0, 2).map(blog => (
                                <Link
                                    href={`/weblogs/${blog.slug}`} key={blog._id}
                                    className="flex w-full py-2 px-2 gap-4 items-center mb-2 "

                                >
                                    <Image
                                        src={`${base_url}${blog.thumbnail}`}
                                        width={60}
                                        height={60}
                                        alt={blog.title}
                                        className="rounded-lg "
                                        style={{ height: '50px', width: '70px' }}
                                    />
                                    <div>
                                        <h2
                                            style={{ fontSize: '14px', fontFamily: 'DanaFaMedium' }}
                                            className="text-gray-100 w-100 "

                                        >
                                            {blog.title}
                                        </h2>
                                        <p className="mt-1 text-gray-300" style={{ fontSize: '10px' }}>
                                            {blog.brief.length > 50 ? blog.brief.slice(0, 63) : blog.brief}
                                        </p>

                                    </div>

                                </Link>

                            ))}

                            {
                                blogs?.length > 2 && (
                                    <Link
                                        style={{ fontSize: '14px', background: 'linear-gradient(45deg, rgb(26 33 45), #164759)', boxShadow: '0 -2px 4px #ffffff12' }}
                                        className="text-white w-full flex justify-center p-1 bg-primary rounded-3xl"
                                        href={`/search?query=${text}`}

                                    >
                                        نمایش همه نتایج
                                    </Link>
                                )
                            }

                        </section>
                    )
                }

            </div>
        </>
    )
}

export default SearchBox