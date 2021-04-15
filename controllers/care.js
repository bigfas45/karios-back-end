const Care = require('../models/care');
const { errorHandler } = require('../helpers/dbErrorHandler');
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SDMAILKEY);


exports.careById = (req, res, next, id) => {
  Care.findOne({email: id}).exec((err, care) => {
    if (err || !care) {
      return res.status(400).json({
        error: 'care does not exsit',
      });
    }
    req.care = care;
    next();
  });
};

exports.create = (req, res) => {

  const care = new Care(req.body);
  care.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }
    res.json({ data });
  });
};


exports.update = (req, res) => {
  const care = req.care;
  care.name = req.body.name;
  care.dob = req.body.dob;
  care.telephone = req.body.telephone;
  care.email = req.body.email;
  care.gender = req.body.gender;
  care.certificate = req.body.certificate;
  care.expiresAt = req.body.expiresAt;
  care.IELTS = req.body.IELTS;
  care.Nurse = req.body.Nurse;
  care.NMC = req.body.NMC;
  care.CBT = req.body.CBT;
  care.discipline = req.body.discipline;
  care.experience = req.body.experience;
  care.workingNurse = req.body.workingNurse;
  care.department = req.body.department;
  care.relation = req.body.relation;
  care.notice = req.body.notice;

  care.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }
    res.json(data);
  });
};

exports.emailAdmin =async (req, res) => {

  console.log(req.care)


    


  const emailData = {
    from: 'afasina@nasdng.com',
    to: `ayodimejifasina@gmail.com`,
    subject: `Dear `,
    html: `<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0 auto !important;padding: 0 !important;font-size: 14px;margin-bottom: 10px;line-height: 24px;color: #8094ae;font-weight: 400;height: 100% !important;width: 100% !important;font-family: 'Roboto', sans-serif !important;">
<head style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;">
    <meta charset="utf-8" style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;">
    <meta name="viewport" content="width=device-width" style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;">
    <meta http-equiv="X-UA-Compatible" content="IE=edge" style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;">
    <meta name="x-apple-disable-message-reformatting" style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;">
    <title style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;"></title>
    
    <link href="https://fonts.googleapis.com/css?family=Roboto:400,600" rel="stylesheet" type="text/css" style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;">
    
</head>

<body width="100%" style="margin: 0 auto !important;padding: 0 !important;mso-line-height-rule: exactly;background-color: #f5f6fa;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;font-size: 14px;margin-bottom: 10px;line-height: 24px;color: #8094ae;font-weight: 400;height: 100% !important;width: 100% !important;font-family: 'Roboto', sans-serif !important;">
	<center style="width: 100%;background-color: #f5f6fa;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;">
        <table width="100%" border="0" cellpadding="0" cellspacing="0" bgcolor="#f5f6fa" style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0 auto !important;padding: 0;mso-table-lspace: 0pt !important;mso-table-rspace: 0pt !important;border-spacing: 0 !important;border-collapse: collapse !important;table-layout: fixed !important;">
            <tr style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;">
               <td style="padding: 40px 0;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;mso-table-lspace: 0pt !important;mso-table-rspace: 0pt !important;">
                    <table style="width: 100%;max-width: 620px;margin: 0 auto;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;padding: 0;mso-table-lspace: 0pt !important;mso-table-rspace: 0pt !important;border-spacing: 0 !important;border-collapse: collapse !important;table-layout: fixed !important;">
                        <tbody style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;">
                            <tr style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;">
                                <td style="text-align: center;padding-bottom: 25px;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;mso-table-lspace: 0pt !important;mso-table-rspace: 0pt !important;">
                                    <a href="#" style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;text-decoration: none;"><img style="height: 40px;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;-ms-interpolation-mode: bicubic;" src="https://nasdng.com/wp-content/uploads/2021/04/Picture1.jpg" alt="logo"></a>
                                    
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table style="width: 100%;max-width: 620px;margin: 0 auto;background-color: #ffffff;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;padding: 0;mso-table-lspace: 0pt !important;mso-table-rspace: 0pt !important;border-spacing: 0 !important;border-collapse: collapse !important;table-layout: fixed !important;">
                        <tbody style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;">
                            <tr style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;">
                                <td style="padding: 30px 30px 15px 30px;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;mso-table-lspace: 0pt !important;mso-table-rspace: 0pt !important;">
                                    <h2 style="font-size: 18px;color: red;font-weight: 600;margin: 0;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;padding: 0;">NEW REGISTERED USER
</h2>
                                </td>
                            </tr>
                            <tr style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;">
                                <td style="padding: 0 30px 20px;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;mso-table-lspace: 0pt !important;mso-table-rspace: 0pt !important;">
                                    <p style="margin-bottom: 10px;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;">Dear Admin,</p>
                                    <p style="margin-bottom: 10px;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;">Your have a new registered user find user information below</p>
                                    <p style="margin-bottom: 10px;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;">Please find below details for your account.</p>
                                    
                                      <p style="color: black;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;"><b style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;"> NAME :  ${req.care.name}  </b></p>

                                     <p style="color: black;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;"><b style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;"> EMAIL :  ${req.care.email} </b></p>

                                     <p style="color: black;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;"><b style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;"> DOB :  ${req.care.dob} </b></p>
                                     <p style="color: black;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;"><b style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;"> Telephone :  ${req.care.telephone} </b></p>
                                     <p style="color: black;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;"><b style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;"> Gender :  ${req.care.gender} </b></p>
                                     <p style="color: black;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;"><b style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;"> Certificate  :  ${req.care.certificate } </b></p>
                                     <p style="color: black;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;"><b style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;"> IELTS :  ${req.care.IELTS} </b></p>
                                     <p style="color: black;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;"><b style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;"> Registered Nurse  :  ${req.care.Nurse} </b></p>
                                     <p style="color: black;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;"><b style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;"> Registered with NMC :  ${req.care.NMC} </b></p>
                                     <p style="color: black;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;"><b style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;"> Passed CBT exam  :  ${req.care.CBT} </b></p>
                                     <p style="color: black;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;"><b style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;"> Discipline  :  ${req.care.discipline } </b></p>
                                     <p style="color: black;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;"><b style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;"> Years of hospital experience  :  ${req.care.experience} </b></p>
                                     <p style="color: black;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;"><b style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;"> Currently Working As A Nurse  :  ${req.care.workingNurse} </b></p>
                                     <p style="color: black;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;"><b style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;"> Department  :  ${req.care.department } </b></p>
                                     <p style="color: black;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;"><b style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;"> Relation in Europe :  ${req.care.relation} </b></p>
                                     <p style="color: black;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;"><b style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;"> Notice  :  ${req.care.notice } </b></p>


                                </td>
                            </tr>
                         

                        </tbody>

                    </table>

                
               </td>
            </tr>
        </table>
    </center>
</body>
</html> 
`
  };
  // @ts-ignore
 sgMail.send(emailData).then((sent) => console.log('SENT 2 >>>')).catch((err) => console.log('ERR 2 >>>', err));

  res.json(`Mail sent`);

}


exports.emailUser = async (req, res) => {
  console.log(req.care);

  const emailData = {
    from: 'afasina@nasdng.com',
    to: `${req.care.email}`,
    subject: `Dear ${req.care.name}`,
    html: `<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0 auto !important;padding: 0 !important;font-size: 14px;margin-bottom: 10px;line-height: 24px;color: #8094ae;font-weight: 400;height: 100% !important;width: 100% !important;font-family: 'Roboto', sans-serif !important;">
<head style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;">
    <meta charset="utf-8" style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;">
    <meta name="viewport" content="width=device-width" style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;">
    <meta http-equiv="X-UA-Compatible" content="IE=edge" style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;">
    <meta name="x-apple-disable-message-reformatting" style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;">
    <title style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;"></title>
    
    <link href="https://fonts.googleapis.com/css?family=Roboto:400,600" rel="stylesheet" type="text/css" style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;">
    
</head>

<body width="100%" style="margin: 0 auto !important;padding: 0 !important;mso-line-height-rule: exactly;background-color: #f5f6fa;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;font-size: 14px;margin-bottom: 10px;line-height: 24px;color: #8094ae;font-weight: 400;height: 100% !important;width: 100% !important;font-family: 'Roboto', sans-serif !important;">
	<center style="width: 100%;background-color: #f5f6fa;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;">
        <table width="100%" border="0" cellpadding="0" cellspacing="0" bgcolor="#f5f6fa" style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0 auto !important;padding: 0;mso-table-lspace: 0pt !important;mso-table-rspace: 0pt !important;border-spacing: 0 !important;border-collapse: collapse !important;table-layout: fixed !important;">
            <tr style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;">
               <td style="padding: 40px 0;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;mso-table-lspace: 0pt !important;mso-table-rspace: 0pt !important;">
                    <table style="width: 100%;max-width: 620px;margin: 0 auto;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;padding: 0;mso-table-lspace: 0pt !important;mso-table-rspace: 0pt !important;border-spacing: 0 !important;border-collapse: collapse !important;table-layout: fixed !important;">
                        <tbody style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;">
                            <tr style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;">
                                <td style="text-align: center;padding-bottom: 25px;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;mso-table-lspace: 0pt !important;mso-table-rspace: 0pt !important;">
                                    <a href="#" style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;text-decoration: none;"><img style="height: 40px;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;-ms-interpolation-mode: bicubic;" src="https://nasdng.com/wp-content/uploads/2021/04/Picture1.jpg" alt="logo"></a>
                                    
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table style="width: 100%;max-width: 620px;margin: 0 auto;background-color: #ffffff;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;padding: 0;mso-table-lspace: 0pt !important;mso-table-rspace: 0pt !important;border-spacing: 0 !important;border-collapse: collapse !important;table-layout: fixed !important;">
                        <tbody style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;">
                            <tr style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;">
                                <td style="padding: 30px 30px 15px 30px;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;mso-table-lspace: 0pt !important;mso-table-rspace: 0pt !important;">
                                    <h2 style="font-size: 18px;color: red;font-weight: 600;margin: 0;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;padding: 0;">NEW REGISTERED USER
</h2>
                                </td>
                            </tr>
                            <tr style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;">
                                <td style="padding: 0 30px 20px;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;mso-table-lspace: 0pt !important;mso-table-rspace: 0pt !important;">
                                    <p style="margin-bottom: 10px;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;">Dear ${req.care.name},</p>
                                    <p style="margin-bottom: 10px;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;">Your have registered </p>
                                    <p style="margin-bottom: 10px;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;">Please find below details for your account.</p>
                                    
                                      <p style="color: black;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;"><b style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;"> NAME :  ${req.care.name}  </b></p>

                                     <p style="color: black;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;"><b style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;"> EMAIL :  ${req.care.email} </b></p>

                                     <p style="color: black;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;"><b style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;"> DOB :  ${req.care.dob} </b></p>
                                     <p style="color: black;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;"><b style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;"> Telephone :  ${req.care.telephone} </b></p>
                                     <p style="color: black;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;"><b style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;"> Gender :  ${req.care.gender} </b></p>
                                     <p style="color: black;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;"><b style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;"> Certificate  :  ${req.care.certificate} </b></p>
                                     <p style="color: black;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;"><b style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;"> IELTS :  ${req.care.IELTS} </b></p>
                                     <p style="color: black;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;"><b style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;"> Registered Nurse  :  ${req.care.Nurse} </b></p>
                                     <p style="color: black;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;"><b style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;"> Registered with NMC :  ${req.care.NMC} </b></p>
                                     <p style="color: black;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;"><b style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;"> Passed CBT exam  :  ${req.care.CBT} </b></p>
                                     <p style="color: black;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;"><b style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;"> Discipline  :  ${req.care.discipline} </b></p>
                                     <p style="color: black;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;"><b style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;"> Years of hospital experience  :  ${req.care.experience} </b></p>
                                     <p style="color: black;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;"><b style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;"> Currently Working As A Nurse  :  ${req.care.workingNurse} </b></p>
                                     <p style="color: black;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;"><b style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;"> Department  :  ${req.care.department} </b></p>
                                     <p style="color: black;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;"><b style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;"> Relation in Europe :  ${req.care.relation} </b></p>
                                     <p style="color: black;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;"><b style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;"> Notice  :  ${req.care.notice} </b></p>


                                </td>
                            </tr>
                         

                        </tbody>

                    </table>

                
               </td>
            </tr>
        </table>
    </center>
</body>
</html> 
`,
  };
  // @ts-ignore
  sgMail
    .send(emailData)
    .then((sent) => console.log('SENT 2 >>>'))
    .catch((err) => console.log('ERR 2 >>>', err));

  res.json(`Mail sent`);
};




