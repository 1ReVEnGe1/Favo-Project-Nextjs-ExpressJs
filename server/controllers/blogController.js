//Project Modules
const Blog = require('../models/Blog')

exports.getBlogs = async (req, res) => {
    const page = +req.query.page || 1;
    const blogPerPage = 6
    try {
        const numberOfAllBlogs = await Blog.find({ status: 'public' }).countDocuments();

        const blogs = await Blog.find({ status: 'public' })
            .populate('user')
            .sort({ createdAt: 'desc' })
            .skip((page - 1) * blogPerPage)
            .limit(blogPerPage)

        res.status(200).json({
            blogs,
            numberOfAllBlogs,
            currentPage: page,
            nextPage: page + 1,
            prevPage: page - 1,
            lastPage: Math.ceil(numberOfAllBlogs / blogPerPage),
            hasNextPage: page + 1 === Math.ceil(numberOfAllBlogs / blogPerPage),
            hasPrevPage: page > 1
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error Fetching Blogs' })
    }

}

exports.getLatestblogs = async (req, res) => {
    try {
        const { excludeSlug } = req.query

        const blogs = await Blog.find({
            slug: { $ne: excludeSlug },
            status: 'public'
        })
            .sort({ createdAt: -1 })
            .limit(3)

        console.log(blogs);
        res.status(200).json(blogs)

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error Fetching Latest Blogs' })
    }
}

exports.getBlog = async (req, res) => {
    try {
        const blog = await Blog.findOne({ slug: req.params.slug });

        if (!blog) {
            return res.status(400).json({ message: 'THERE IS NO SUCH A BLOG' })
        }

        res.status(200).json(blog)
    } catch (error) {
        return res.status(500).json({ message: 'SERVER ERRORRRRRRRRR' })
    }
}

exports.searchedBlogs = async (req, res) => {
    const { query, limit } = req.query;

    if (!query) {
        return res.status(400).json({ message: 'Query is Required' })
    }

    try {
        const blogs = await Blog.find({ title: { $regex: query, $options:'i'} })
            .limit(Number(limit) || 10);

        return res.status(200).json(blogs);

    } catch (error) {
        return res.status(500).json({message:'Server Error HEY'})
    }
}