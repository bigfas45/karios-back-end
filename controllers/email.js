const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SDMAILKEY);

exports.mail = (req, res) => {
  const emailData = {
    to: `info@kairosng.com`,
    from: 'afasina@nasdng.com',
    subject: `You have a new Order`,
    html: `
        <div class=""><div class="aHl"></div><div id=":1hj" tabindex="-1"></div><div id=":1gt" class="ii gt"><div id=":1gu" class="a3s aXjCH msg2135453032208332481"><u></u>
        <div style="background-color:#efeff0;font-family:'Montserrat',Arial,Helvetica,sans-serif;color:#072360;font-size:16px;line-height:1.6;padding-top:40px;padding-bottom:40px">
        <table cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:600px;margin-top:40px;margin-right:auto;margin-bottom:40px;margin-left:auto;border-collapse:collapse;border:none">
            <tbody>
                <tr>
                    <td>
                        <div style="border:1px solid #cdced2;background-color:#fff;border-radius:4px">
                            <table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;background-color:#fff;border-radius:4px">
                                <tbody>
                                    
                                    <tr>
                                        <td style="background-color:#072360;padding:24px 30px 24px 30px;border-top-left-radius:4px;border-top-right-radius:4px">
                                        <img src="data:image/png;base64,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" alt="" title="" width="146" height="38" class="CToWUd">
                                        </td>
                                    </tr>
                                    
                                    <tr>
                                        <td style="padding:40px 32px 0 32px">
                                            <p style="display:none!important;opacity:0;color:transparent;height:0;width:0">We'll review it within 1 business day and will get back to you.</p>
        
        <p>Hi Admin,</p>
        <p>You have a new Order
        <br/>
        <p>Product Name: ${req.order.product.name} </p>
        <p>Price :  ${req.order.product.price}</p>
        <p> Customer Name: ${req.order.lastname} ${req.order.firstname} </p>
        <p>Phone Number: ${req.order.phonenumber} </p>
         <p>Customer Email: ${req.order.email} </p>
         <p>Payment Status: ${req.order.status === 1 ? 'PAID' : 'NOT PAID'} </p>
         <p> Training Type:  ${req.order.trainingType}</p>
       Kindly Login to your Admin Dashboard to get more details</p>
        
        
        
        <p>Regards,<br>
        <span class="il">Karios</span></p>
                                        </td>
                                    </tr>
                                    
                                    <tr>
                                        <td>
                                            <table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;margin-bottom:32px">
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <div style="background-color:#fcdfeb;border-radius:4px;margin:40px 32px 0px 32px">
                                                                <table cellpadding="8px" cellspacing="0" border="0" style="border-collapse:collapse">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td>
                                                                                <p style="margin:0 8px 0 8px;padding:0;font-size:14px;line-height:1.4">
                                                                                    WE ENABLE NEW AND EXISTING AFRICAN BUSINESSES UNLOCK OPPORTUNITIES IN THE CONTINENT.
                                                                                </p>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                    
                                </tbody>
                            </table>
                        </div>
                    </td>
                </tr>
                
               
            </tbody>
        </table>
        

         `,
  };
  sgMail
    .send(emailData)
    .then((sent) => console.log('SENT 2 >>>'))
    .catch((err) => console.log('ERR 2 >>>', err));

  res.json(`Mail sent`);
};

exports.mailContactForm = (req, res) => {
  const emailData = {
    to: `info@kairosng.com`,
    from: 'afasina@nasdng.com',
    subject: `${req.contact.subject ? req.contact.subject : 'NEWSLETTER'}`,
    html: `
        <div class=""><div class="aHl"></div><div id=":1hj" tabindex="-1"></div><div id=":1gt" class="ii gt"><div id=":1gu" class="a3s aXjCH msg2135453032208332481"><u></u>
        <div style="background-color:#efeff0;font-family:'Montserrat',Arial,Helvetica,sans-serif;color:#072360;font-size:16px;line-height:1.6;padding-top:40px;padding-bottom:40px">
        <table cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:600px;margin-top:40px;margin-right:auto;margin-bottom:40px;margin-left:auto;border-collapse:collapse;border:none">
            <tbody>
                <tr>
                    <td>
                        <div style="border:1px solid #cdced2;background-color:#fff;border-radius:4px">
                            <table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;background-color:#fff;border-radius:4px">
                                <tbody>
                                    
                                    <tr>
                                        <td style="background-color:#072360;padding:24px 30px 24px 30px;border-top-left-radius:4px;border-top-right-radius:4px">
                                        <img src="data:image/png;base64,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" alt="" title="" width="146" height="38" class="CToWUd">
                                        </td>
                                    </tr>
                                    
                                    <tr>
                                        <td style="padding:40px 32px 0 32px">
                                            <p style="display:none!important;opacity:0;color:transparent;height:0;width:0">We'll review it within 1 business day and will get back to you.</p>
        
        <p>Hi Admin,</p>
        <p>NAME: ${req.contact.name ? req.contact.name : ''}</p>
         <p>EMAIL: ${req.contact.email ? req.contact.email : ''}</p>
          <p>PHONE: ${req.contact.telephone ? req.contact.telephone : ''}</p>
           <p>SERVICES: ${req.contact.services ? req.contact.services : ''}</p>
       <p>MESSAGE: <b>${req.contact.message ? req.contact.message : ''}</b></p>
       Kindly Login to your Admin Dashboard to get more details</p>
        
        
        
        <p>Regards,<br>
        <span class="il">Karios</span></p>
                                        </td>
                                    </tr>
                                    
                                    <tr>
                                        <td>
                                            <table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;margin-bottom:32px">
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <div style="background-color:#fcdfeb;border-radius:4px;margin:40px 32px 0px 32px">
                                                                <table cellpadding="8px" cellspacing="0" border="0" style="border-collapse:collapse">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td>
                                                                                <p style="margin:0 8px 0 8px;padding:0;font-size:14px;line-height:1.4">
                                                                                    WE ENABLE NEW AND EXISTING AFRICAN BUSINESSES UNLOCK OPPORTUNITIES IN THE CONTINENT.
                                                                                </p>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                    
                                </tbody>
                            </table>
                        </div>
                    </td>
                </tr>
                
               
            </tbody>
        </table>
        

         `,
  };
  sgMail
    .send(emailData)
    .then((sent) => console.log('SENT 2 >>>'))
    .catch((err) => console.log('ERR 2 >>>', err));

  res.json(`Mail sent`);
};
