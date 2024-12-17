const Yup = require('yup');

exports.postSchema = Yup.object().shape({
    title: Yup.string()
        .required('عنوان وبلاگ الزامی می باشد')
        .min(5, 'عنوان وبلاگ نباید کمتر از 5 کاراکتر باشد')
        .max(100, 'عنوان وبلاگ نباید بیشتر از 100 کاراکتر باشد'),
    thumbnail: Yup.object().shape({
        name: Yup.string(),
        size: Yup.number().max(4 * 1024 * 1024, 'عکس نباید بیشتر از 4 مگابایت باشد'),
        mimetype: Yup.mixed().oneOf(['image/jpeg', 'image/png', 'image/webp', 'image/jpg'], 'تنها فرمت های jpg , jpeg , png , webp مجاز به آپلود هستند')

    }),
    brief:Yup.string(),
    content: Yup.string()
        .required('وبلاگ باید دارای محتوا باشد'),
    status: Yup.mixed().oneOf(['private', 'public'], 'یکی از 2 وضعیت خصوصی یا عمومی را انتخاب کنید'),
    faqs:Yup.array()
        .of(
            Yup.object().shape({
                question:Yup.string()
                    .min(5, 'سوال نباید کمتر از 5 کاراکتر باشد')
                    .max(455 , 'یواش بابا!!! سوال نمیتونه بیشتر از 455 کاراکتر باشه'),
                answer:Yup.string()
                    .max(455 , 'یواش بابا!!! جواب نمیتونه بیشتر از 455 کاراکتر باشه')
            })
        ),
    slug:Yup.string()
        .required('برای مقالت URL انتخاب نکردی. پس الان کدوم لینک بریزمش مقالت رو ؟ حتما هم انگلیسی بنویسش')
        .max(100, 'URL مقالت نباید بیشتر از 100 کاراکتر باشه'),
    keywords:Yup.string()
        .required('کلمات کلیدی رو وارد نکردی مومن، حداقل 5 تا 8 کلمه وارد کن.')
        .max(255 , 'تعداد کاراکتر های بخش کلمات کلیدی نمیتونه بیشتر از 255 تا باشه.')
        .min(5 , 'تعداد کاراکتر های بخش کلمات کلیدی باید بیشتر از 5 تا باشه')
})