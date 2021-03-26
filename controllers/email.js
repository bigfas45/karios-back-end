
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SDMAILKEY);


exports.mail = (req, res) => {

console.log(req.order)


   const emailData = {
     to: `afasina@nasdng.com`,
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
                                        <img src="https://nasdng.com/wp-content/uploads/2020/06/logo.jpg" alt="" title="" width="146" height="38" class="CToWUd">
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