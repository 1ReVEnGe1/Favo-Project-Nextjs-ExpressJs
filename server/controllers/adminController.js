//Internal Modules
const path = require('path');
const fs = require('fs');

//External Modules
const uuid = require('uuid').v4;
const sharp = require('sharp');

//Project Modules
const Blog = require('../models/Blog');

exports.uploadAdapterImg = async (req, res) => {
    try {
        const uploadedImg = req.files?.file


        // upload url
        const uploadedFileUrl = path.join(__dirname, `../public/uploads/images/`);

        //Ensure Upload Directory exists
        if (!fs.existsSync(uploadedFileUrl)) {
            fs.mkdirSync(uploadedFileUrl, { recursive: true })
        }

        let uploadedImgPath = null;
        if (uploadedImg) {
            //Validate file size (limit: 1MB)
            const maxSizeInBytes = 1 * 1024 * 1024; //1MB
            if (uploadedImg.size > maxSizeInBytes) {
                return res.status(400).json({ message: 'حجم فایل نمی تواند بیشتر از 1 MB باشد.' })
            }

            //Validate File Type
            if (!['image/jpg', 'image/png', 'image/webp', 'image/jpeg'].includes(uploadedImg.mimetype)) {
                return res.status(400).json({ message: 'این فرمت از فایل غیر قابل قبول می باشد' })
            }

            const uniqueName = `${uuid()}_${uploadedImg.name}`

            const uploadPath = path.join(__dirname, '../public/uploads/images/', uniqueName);

            await sharp(uploadedImg.data)
                .resize(1024, 576, { fit: 'inside' })
                .webp({ quality: 80 })
                .toFile(uploadPath)

            uploadedImgPath = `http://localhost:8080/uploads/images/${uniqueName}`;
        }

        return res.json({ url: uploadedImgPath });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Upload failed" });
    }
}

exports.handleAddBlog = async (req, res) => {

    try {
        const { title, content, status, brief, faqs, slug, keywords } = req.body;

        console.log(keywords);

        //Convert faqs to Array. its type is naturally string
        let parsedFaqs = JSON.parse(faqs)

        const thumbnail = req.files?.thumbnail;

        try {
            await Blog.postValidation({
                ...req.body,
                faqs: parsedFaqs //
            });
        } catch (validationErr) {
            console.log('---------Yup Validation Error------------')
            console.log(validationErr.errors)
            return res.status(400).json({ message: validationErr.errors })
        }

        //Ensure Upload Directory exists
        const uploadDir = path.join(__dirname, '../public/uploads/thumbnails');

        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true })
        }

        //Store pic
        let thumbnailPath = null;
        if (thumbnail) {
            //Validate file size (limit: 1MB)
            const maxSizeInBytes = 1 * 1024 * 1024; //1MB
            if (thumbnail.size > maxSizeInBytes) {
                return res.status(400).json({ message: 'حجم فایل نمی تواند بیشتر از 1 MB باشد.' })
            }

            //Validate file type
            if (!['image/png', 'image/jpeg', 'image/webp', 'image/jpg'].includes(thumbnail.mimetype)) {
                return res.status(400).json({ message: 'فرمت فایل قابل قبول نیست.' })
            }

            const uniqueName = `${uuid()}_${thumbnail.name.replace(/\s+/g, '-').replace(/[^\w.-]/g, '')}`
            const uploadPath = path.join(__dirname, '../public/uploads/thumbnails', uniqueName);

            // Resize & Convert To Webp And Put The File In The UploadPath
            await sharp(thumbnail.data)
                .resize(1024, 576, { fit: 'inside' })
                .webp({ quality: 80 })
                .toFile(uploadPath)


            thumbnailPath = `/uploads/thumbnails/${uniqueName}`;
        } else {
            thumbnailPath = `/uploads/images/dafault/no-image.jpg`;
        }



        //create a new post
        const newPost = new Blog({
            title,
            content,
            status,
            brief,
            thumbnail: thumbnailPath,
            user: req.user._id,
            faqs: parsedFaqs,
            slug,
            keywords
        })

        //store in db
        await newPost.save();

        return res.status(201).json({ message: 'Post added successfully', post: newPost })

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'مشکلی از سمت سرور رخ داده است. لطفا بعد امتحان کنید.' })
    }
}



//Edit Blog
exports.editBlog = async (req, res) => {
    const blog = await Blog.findOne({ _id: req.params.id })
    const thumbnail = req.files?.thumbnail;
    const { faqs } = req.body;

    let parsedFaqs = JSON.parse(faqs)

    try {
        //Validate every patameters with Yup
        await Blog.postValidation({ ...req.body, faqs: parsedFaqs }); // if does not valid it goes to catch 

        //Validate if blog exists or not
        if (!blog) {
            return res.status(400).json({ message: 'Invalid Blog Id' })
        }


        let thumbnailPath = blog.thumbnail;

        if (thumbnail) {
            //Validate File Size
            const maxSizeInBytes = 1 * 1024 * 1024 //1MB
            if (thumbnail.size > maxSizeInBytes) {
                return res.status(400).json({ message: 'حجم فایل نمی تواند بیشتر از 1 MB باشد.' })
            }

            //Validate File Type
            if (!['image/jpg', 'image/jpeg', 'image/png', 'image/webp'].includes(thumbnail.mimetype)) {
                return res.status(400).json({ message: 'فرمت فایل قابل قبول نیست.' })
            }



            //Set A Unique Name For Thumbnail
            const uniqueName = `${uuid()}_${thumbnail.name.replace(/\s+/g, '-').replace(/[^\w.-]/g, '')}`
            //Upload Path
            const uploadPath = path.join(__dirname, '../public/uploads/thumbnails', uniqueName)

            //Remove Previous Thumbnail
            // fs.unlink(path.join(__dirname, '../public/uploads/thumbnails', blog.thumbnail))
            if (blog.thumbnail) {
                try {
                    await fs.promises.unlink(path.join(__dirname, '../public', blog.thumbnail));
                } catch (err) {
                    console.error('Error removing old thumbnail:', err);
                }
            }
            console.log(blog.thumbnail);

            //Resize & Convert To Webp And Put The File In The UploadPath
            await sharp(thumbnail.data)
                .resize(1024, 576, { fit: 'inside' })
                .webp({ quality: 80 })
                .toFile(uploadPath)


            thumbnailPath = `/uploads/thumbnails/${uniqueName}`;

        }

        //Get Request
        const { title, status, content, brief, slug, keywords } = req.body;

        blog.title = title;
        blog.status = status;
        blog.content = content;
        blog.thumbnail = thumbnailPath;
        blog.brief = brief;
        blog.faqs = parsedFaqs;
        blog.slug = slug;
        blog.keywords = keywords;

        await blog.save()
        console.log('post updated successfully');
        return res.status(200).json({ message: 'وبلاگ آپدیت شد ' })

    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: err })
    }

}


//Get Blogs In Dashboard
exports.getBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find({ user: req.user._id }).sort({ createdAt: -1 });

        return res.status(200).json(blogs)

    } catch (error) {
        console.log(error);
        if (!res.headersSent) {
            return res.status(500).json({ message: 'Failed to fetch blogs. Please try again later' });
        }
    }
}

//Get Only One Blog
exports.getBlog = async (req, res) => {
    try {
        const blog = await Blog.findOne({ _id: req.params.id })
        return res.status(200).json(blog)
    } catch (error) {
        console.log(error);
        if (!res.headersSent) {
            return res.status(500).json({ message: 'Failed to fetch blogs. Please try again later' });
        }
    }
}



//Delete Blog
exports.deleteBlog = async (req, res) => {
    try {
        console.log(req.params)
        const blog = await Blog.findByIdAndDelete(req.params.id);
        if (!blog) {
            return res.status(404).json({ message: 'Blog Is Not Found' })
        }
        res.status(200).json({ message: 'Blog Deleted Successfully' });

    } catch (err) {
        res.status(500).json({ message: 'Error Deleting Blog' })
    }
}

//Change BLog Status
exports.changeBlogStatus = async (req, res) => {
    try {


        const blog = await Blog.findById(req.params.id)

        if (!blog) {
            console.log('weblog does not exists')
            return res.status(400).json({ message: 'وبلاگی با این مشخصات پیدا نشد' });
        }

        blog.status = blog.status === 'private' ? 'public' : 'private'

        await blog.save()

        res.status(200).json({
            message: 'Blog status successfully changed',
            status: blog.status
        });

    } catch (err) {

    }
}

//Check if blog url is duplicated or not
exports.checkUrlExist = async (req , res) => {
    try {
        const {url} = req.body
        

        const isExistsUrl = await Blog.find({slug:url});

        console.log(isExistsUrl);
        if(isExistsUrl.length > 0){
            return res.status(200).json({isUniqueUrl:false})
        }

        return res.status(200).json({isUniqueUrl:true})

    } catch (error) {
        res.json({message:'Server Rid'})
    }
}