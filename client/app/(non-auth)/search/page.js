'use client'

import PageTop from "@/components/PageTop";
import WeblogHome from "@/components/WeblogHome";
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react";

const base_url = process.env.NEXT_PUBLIC_BASE_URL_FRONT

const SearchPage = () => {
    const searchParams = useSearchParams();
    const query = searchParams.get('query');
    const [resutls, setResults] = useState([]);

    useEffect(() => {
        const fetchResult = async () => {
            const res = await fetch(`${base_url}/api/blogs/search?query=${query}`);
            if (!res.ok) {
                throw new Error('Error Fetching Data')
            }
            const data = await res.json()

            setResults(data)
        };

        if (query) {
            fetchResult()
        }

    }, [query])


    return (

        <div className="min-h-screen" style={{ 'paddingTop': '100px' }}>
            <main className="mx-auto max-w-7xl mt-20 ">
                <h1 style={{fontFamily:'RokhFaBold',fontSize:'30px'}} className="text-white ">
                    نتایج جست و جو عبارت : " <span className="text-secondary">{query}</span> "
                </h1>
                <div className="grid grid-cols-3 gap-4 mt-10">

                    {
                        resutls.map((blog, index) => (
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

export default SearchPage