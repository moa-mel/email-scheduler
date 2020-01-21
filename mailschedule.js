const cron = require("node-cron");
const Express = require("express");
let nodemailer = require("nodemailer");
const BodyParser = require("body-parser");
var app = Express();
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));
 // create mail transporter
 let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "olaitanmaryakano@gmail.com",
      pass: "08162179933"
    },
    tls :{ rejectUnauthorized: false}
  });
  // sending emails at periodic intervals
  cron.schedule("16 21 * * * ", function(){
    console.log("---------------------");
    console.log("Running Cron Job");
    let mailOptions = {
      from: "olaitanmaryakano@gmail.com",
      to: "olalekantemitayo7@gmail.com",
      subject: `Unusual mail ;)`,
      text: 'Tayo, shana girl'
    };
    transporter.sendMail(mailOptions, function(error, info) {
      if (error) {
        throw error;
      } else {
        console.log("Email successfully sent!");
      }
    });
  });
app.listen(3000, () => {});