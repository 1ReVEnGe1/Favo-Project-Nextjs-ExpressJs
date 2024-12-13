'use client'

import { useEffect, useState } from "react";
import { formatDate } from "@/utils/jalali";
import Link from "next/link";


const Dashboard = () => {
    const [blogs, setBlogs] = useState([]);
    const base_url2 = process.env.BASE_URL2

    useEffect(() => {

        const fetchBlogs = async () => {
            try {
                const response = await fetch('http://localhost:8080/api/dashboard/blogs', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                });


                const data = await response.json();

                if (response.ok) {
                    setBlogs(data);
                    console.log(data);
                }


            } catch (err) {
                console.log('---------error-------------')
                console.log('error:', err)

            }
        }

        fetchBlogs()

    }, [])

    //Delete Blog
    const handleDeleteBlog = async (blogId) => {
        try {
            const response = await fetch(`http://localhost:8080/api/dashboard/blogs/${blogId}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });

            if (response.ok) {
                setBlogs(blogs.filter(blog => blog._id !== blogId))
            } else {
                console.log('failed to delete blog')
            }


        } catch (err) {
            console.log('Error deleting blog: ', err);
        }
    }

    //Change BLog Status
    const handleBlogStatus = async (blogId) => {
        try {
            const response = await fetch(`http://localhost:8080/api/dashboard/blogs/${blogId}`, {
                method: 'PATCH',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
            })

            if (!response.ok) {
                throw new Error('Failed to update blog status');
            }



            setBlogs(prevBlogs =>
                prevBlogs.map(blog => (
                    blog._id === blogId ? { ...blog, status: blog.status === 'public' ? 'private' : 'public' } : blog
                ))
            )

        } catch (error) {
            console.log('Error updating status : ', error)
        }
    }

    //-------------------------------------------------------------

    if (blogs.length === 0) {
        return <div>هنوز هیچ وبلاگی ثبت نکردی</div>
    }

    return (
        <>
            <div className="mx-auto mt-5 w-4/5">
                <h2 className="text-2xl text-white font-bold">همه ی وبلاگ ها</h2>
                <table>
                    <thead>
                        <tr>
                            <th>ردیف</th>
                            <th>عنوان وبلاگ</th>
                            <th>تاریخ انتشار</th>
                            <th>وضعیت</th>
                            <th> ویرایش / حذف</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            blogs.map((blog, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>
                                             
                                        <Link style={{'textDecoration':'underLine'}} href={`/weblogs/${blog.slug}`}>
                                            {blog.title.length > 100 ? blog.title.slice(0, 20) + '...' : blog.title}
                                        </Link>
                                    </td>
                                    <td>{formatDate(blog.createdAt)}</td>
                                    <td>
                                        <button
                                            type="button"
                                            className={`text-white text-center rounded-lg text-sm px-4 py-2 w-20 ${blog.status === 'public' ? 'bg-green-700 hover:bg-green-900' : 'bg-yellow-600 hover:bg-yellow-700'}`}
                                            onClick={() => handleBlogStatus(blog._id)}
                                        >
                                            {blog.status === 'public' ? 'عمومی' : 'خصوصی'}
                                        </button>
                                    </td>
                                    <td>
                                        <Link href={`/dashboard/edit-post/${blog._id}`}>
                                            <button
                                                type="button"
                                                className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                                            >
                                                ویرایش
                                            </button>
                                        </Link>

                                        <button
                                            onClick={() => handleDeleteBlog(blog._id)}
                                            type="button"
                                            className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                                        >
                                            حذف
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

        </>
    );
};

export default Dashboard;
