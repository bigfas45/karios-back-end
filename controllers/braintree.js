const User = require("../models/user");
const braintree = require('braintree');
require('dotenv').config();




const getway = braintree.connect({
    environment: braintree.Environment.Sandbox,
    merchantId: process.env.BRAINTREE_MERCHANT_ID,
    publicKey: process.env.BRAINTREE_PUBLIC_KEY,
    privateKey: process.env.BRAINTREE_PRIVATE_KEY
})

exports.generateToken = (req, res) => {
    getway.clientToken.generate({},function(err, response){
        if (err) {
            res.status(500).send(err)
        }else{
            res.send(response)
        }
    } )
}

exports.processPayment = (req, res) => {
    let nonceFromTheClient = req.body.paymentMethodNonce
    let amountFromTheClient = req.body.amount
    // charge
    let newTransaction = getway.transaction.sale({
        amount: amountFromTheClient,
        paymentMethodNonce: nonceFromTheClient,
        options: {
            submitForSettlement: true
        }
    }, (error, result) => {
        if (error) {
            res.status(500).json(error)
        }else{
            res.json(result)
        }
    })
}