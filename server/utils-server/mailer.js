const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');


const transporterDetails = smtpTransport({
    host:'mail.cv-me10.ir',
    port:465,
    secure:true,
    auth: {
        user:'heart@cv-me10.ir',
        pass:"Amirreza10@"
    },
    tls:{
        rejectUnauthorized: false
    }
})

exports.sendMail = (email , fullname , subject , message) => {
    const transporter = nodemailer.createTransport(transporterDetails);
    transporter.sendMail({
        from:'heart@cv-me10.ir',
        to:email,
        subject,
        html: `<h1> Hi ${fullname}</h1>
            <p>${message}</p> `
    })
}