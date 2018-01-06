var express = require('express');
var router = express.Router();
const nodemailer = require('nodemailer');
<!-- setup the smtp and email credentials-->
let transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: 'shoppingzone.kiell@gmail.com', // generated ethereal user
    pass: '123zxc123/'  // generated ethereal password
  }
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.locals.session = req.session;
  res.render({ title: 'WebApp', page_name  : 'm_ContactUs.vue'});
});

router.get('/m_contactus', function(req, res, next) {

  res.render({ title: 'WebApp', page_name  : 'm_ContactUs.vue' });
});
<!-- admin email setup-->
router.post('/m_contactus', function(req, res, next) {

  // ------------- Send Contact Us Data to Admin STARTs -------------- //
  let mailOptions = {
    from: '"user " <admin@shoppingzone.com>', // sender address
    to: 'shoppingzone.kiell@gmail.com', // list of receivers
    subject: 'user | Contact Us | ' + req.body.textsurname, // Subject line
    text: null, // plain text body
    html: JSON.stringify(req.body) // html body
  };
  <!-- user email setup-->
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error while sending Email to Admin.', error);
      res.render({ title: 'WebApp', page_name  : 'm_ContactUs.vue', message : 'email_not_sent' });
    }else {

      // ------------- Send Confirmation Email to User STARTs -------------- //
      mailOptions = {
        from: '"user " <foo@blurdybloop.com>', // sender address
        to: req.body.textemail, // list of receivers
        subject: 'user | hello', // Subject line
        text: req.body.textmessage, // plain text body
        html: '<h1>user</h1><p>Thank you very much for contacting us, We will contact you as soon as possible.</p>' // html body
      };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error while sending Email to User.", error);
      res.render({ title: "WebApp", page_name  : "m_ContactUs.vue", message : "email_not_sent" });
    }else {
      res.render( { title: "WebApp", page_name  : "m_ContactUs.vue", message : "email_sent" });
}
});
  // ------------- Send Confirmation Email to User STARTs -------------- //

}
});
  // ------------- Send Contact Us Data to Admin ENDs -------------- //
});


module.exports = router;


