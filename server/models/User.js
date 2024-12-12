//External Modules
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const { yupSchema } = require('./secure/userValidation')



const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        trim: true,
        minLength:[3 , 'حداقل تعداد کاراکتر نام کاربری باید 3 تا باشد'],
        maxLength: [255 , 'نام کابری نمیتواند بیشتر از 255 کاراکتر باشد'],
        required:[true , 'نام کاربری یادت رفت']
    },
    email: {
        type: String,
        required: [true , 'ایمیل یادت رفت'],
        unique:[true , 'این ایمیل از قبل موچوده']
    },
    password: {
        type:String,
        minLength:[3 , 'حداقل تعداد کاراکتر رمز عبور باید 3 تا باشه'],
        maxLength:[255 , 'بیشتر از 255 تا رمز عبور نوشتی'],
        required:[true , 'رمز عبور اجبرای است']
    },
    createdAt: {
        type: Date,
        default:Date.now()
    }
})

userSchema.statics.userValidation = async function(body) {
    return await yupSchema.validate(body, { abortEarly: false });
};


userSchema.pre('save' , function(next){
    let user = this
    if(!user.isModified('password')){
        return next()
    }

    bcrypt.hash(user.password , 10 , (err, hash)=>{
        if(err){
            return next(err)
        }

        user.password = hash
        next()
    })
})

const User = mongoose.model('User' , userSchema)

module.exports = User