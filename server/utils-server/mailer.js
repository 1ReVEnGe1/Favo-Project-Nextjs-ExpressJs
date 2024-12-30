const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');


const transporterDetails = smtpTransport({
    host:process.env.EMAIL_HOST,
    port:process.env.EMAIL_PORT,
    secure:true,
    auth: {
        user:process.env.EMAIL_USER,
        pass:process.env.EMAIL_PASS
    },
    tls:{
        rejectUnauthorized: false
    }
})

exports.sendMail = (email , fullname , subject , message) => {
    const transporter = nodemailer.createTransport(transporterDetails);
    transporter.sendMail({
        from:process.env.EMAIL_FROM,
        to:email,
        subject,
        html: `<h1> Hi ${fullname}</h1>
            <p>${message}</p> `
    })
}