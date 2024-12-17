//External Modules
const mongoose = require('mongoose');

//Internal Modules
const { postSchema } = require('./secure/postValidation');


const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        minLength: [3, 'حداقل تعداد کاراکتر نام کاربری باید 3 تا باشد'],
        maxLength: [255, 'نام کابری نمیتواند بیشتر از 255 کاراکتر باشد'],
        required: [true, 'نام کاربری یادت رفت']
    },
    thumbnail: {
        type: String,

    },
    brief: {
        type: String,
        required: [true, 'خلاصه پست رو وارد نکردی. نباید خالی بمونه.']
    },
    content: {
        type: String,
        required: [true, 'محتوای پست الزامی می باشد']
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    status: {
        type: String,
        default: 'private',
        enum: ['private', 'public']
    },
    faqs: [
        {
            question: {
                type: String,
                minLength: [3, 'حداقل تعداد کاراکتر سوال باید 3 تا باشد'],
                maxLength: [455, 'یواش بابا!!! سوال نمیتونه بیشتر از 455 کاراکتر باشه'],
            },
            answer: {
                type: String,
                minLength: [3, 'حداقل تعداد کاراکتر جواب باید 3 تا باشد'],
                maxLength: [455, 'یواش بابا!!! جواب نمیتونه بیشتر از 455 کاراکتر باشه'],
            }
        }
    ],
    slug: {
        type: String,
        required: [true, 'خنگ!!! ، آدرس URL یادت رفت. حتما هم انگلیسی بنویسیش'],
        unique: [true, 'این URL از قبل موچوده']
    },
    keywords: {
        type: String,
        required: [true, 'کلمات کلیدی رو وارد نکردی مومن، بین 5 تا 8 کلمه وارد کن'],
        maxLength: [255 , 'تعداد کاراکتر های بخش کلمات کلیدی نمیتونه بیشتر از 255 تا باشه'],
        minLength: [5 , 'تعداد کاراکتر های بخش کلمات کلیدی باید بیشتر از 5 تا باشه']
    },
    createdAt: {
        type: Date,
        default: Date.now
    },

})

blogSchema.statics.postValidation = function (body) {
    return postSchema.validate(body, { abortEarly: false })
}

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog