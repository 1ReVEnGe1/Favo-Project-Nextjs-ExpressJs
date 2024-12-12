//External Modules
const Yup = require('yup');

const yupSchema = Yup.object().shape({
    fullname: Yup.string()
        .required('yup fullname is required')
        .min(4, 'fullname at least should be 4 characters')
        .max(255, 'Fullname can not be more than 255 characters'),
    email: Yup.string()
        .email('Email us not in correct format')
        .required('email is necessary'),
    password: Yup.string()
        .min(4, 'password is short')
        .max(255, 'password is too long')
        .required('password is necessary'),
    confirmPassword: Yup.string()
        .required('Confirm password is required')
        .oneOf([Yup.ref('password'), null], 'password and confirmation are not the same'),
});

module.exports = { yupSchema };
