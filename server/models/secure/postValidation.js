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

    })
    
    ,
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
        )

})