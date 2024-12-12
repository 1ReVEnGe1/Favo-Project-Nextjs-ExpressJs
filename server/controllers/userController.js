//Internal Modules
const User = require('../models/User');

//External Modules
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.createUser = async (req, res) => {
    const errors = []
    try {

        await User.userValidation(req.body)
        const { fullname, email, password } = req.body;
        const user = await User.findOne({ email });


        if (user) {
            errors.push({
                message: 'User with this email address in already exists.'
            })
            return res.status(400).json({
                errorMessage: errors
            })
        }

        await User.create({
            fullname,
            email,
            password
        })


        res.status(200).json({
            message: 'mame'
        })
    } catch (err) {
        console.log(err)

        err.inner.forEach(e => {
            errors.push({
                name: e.path,
                message: e.message
            })
        })

        return res.status(400).json({
            errorMessage: errors
        })
    }

}


exports.handleLogin = async (req, res) => {
    const errors = []

    try {
        const { email, password, remember, recaptchaToken } = req.body
        const user = await User.findOne({ email });

        const recaptchaResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
            method:'POST',
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({
                secret: process.env.RECAPTCHA_SECRET_KEY,
                response: recaptchaToken
            }).toString()
        });

        const recaptchaData = await recaptchaResponse.json();

        if(!recaptchaData.success){
            errors.push({message : 'reCAPTCHA verification failed'});
            res.status(400).json(errors);
        }

        //User does not exist
        if (!user) {
            errors.push({ message: 'No user have been found with this characteristics' })
            return res.status(404).json(errors)
        }

        //Compare passwords
        const isValidUser = await bcrypt.compare(password, user.password)

        //User not valid
        if (!isValidUser) {
            errors.push({ message: 'Password is incorrect' })
            return res.status(401).json(errors);
        }

        //Sign Token
        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET_KEY,
            { expiresIn: remember ? '30d' : '1h' }
        )

        //Send signed token to the front end
        return res.json({ token })

    } catch (err) {
        //Logging Error
        console.log(err)

        //Push error objects into the errors array
        if (err.inner) {
            err.inner.forEach(e => {
                errors.push({
                    name: e.path,
                    message: e.message
                });
            });
        }

        //Send status code and erros to the front end
        return res.status(400).json(errors)

    }

}

exports.verifyUser = async (req, res) => {
    const { token } = req.body;
    if (!token) {
        return res.status(403).json({ message: 'No Token available' });
    }

    try {
        const decoded = await jwt.verify(token, process.env.JWT_SECRET_KEY);
        res.json({ valid: true, userId: decoded.id });
    } catch (err) {
        res.status(403).json({ valid: false, message: 'Invalid Token' });
        
    }

}

exports.getUser = (req, res) => {

    res.json({
        userId: req.user._id,
        fullname: req.user.fullname,
        email: req.user.email
    })
}