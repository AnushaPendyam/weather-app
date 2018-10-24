var nodeMailer= require('nodemailer')

var transporter = nodeMailer.createTransport({
  service: 'gmail',
  auth:{
      user: '*********************',
      pass: '*****************',
  },
});


const mailOptions = {
    from: '**************',
    to:'******************',
    subject: 'Welcome Node Mailer',
    html:'Hello  !!'
};

transporter.sendMail(mailOptions, function(err, info){
    if(err){
      console.log(err)
    }else{
        console.log(info)
    }
});
