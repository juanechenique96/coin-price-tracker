export default function (req, res) {
    require('dotenv').config()
    let nodemailer = require('nodemailer')
    //console.log(req.body)

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'coin.price.tracker.2021@gmail.com',
            pass: 'btceth2021'
        },
    })

    const mailData = {
        from: req.body.email,
        to: process.env.TO,
        subject: `Message from ${req.body.name}`,
        text: req.body.message
    }

    transporter.sendMail(mailData, (err, info) => {
        if (err)
            console.log(err)
        else
            console.log(info)
    })

    res.send('success')
}