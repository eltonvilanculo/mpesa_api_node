const fetch = require('node-fetch');
require('dotenv').config() ;
const pay =  function (number ,  amount ,  req , res ) {

    const message = {
        number : req.query.number ,
        amount :req.query.amount
    }


    const body = {
        "input_TransactionReference" : "T12344C" ,
        "input_CustomerMSISDN" : req.query.number ,
        "input_Amount" : req.query.amount ,
        "input_ThirdPartyReference" : new Date().getTime() ,
        "input_ServiceProviderCode" : "171717" ,


    };

    fetch('https://api.sandbox.vm.co.mz:18352/ipg/v1x/c2bPayment/singleStage/', {
        method: 'post',
        body:    JSON.stringify(body),
        headers: { 'Content-Type': 'application/json'   ,
            'Authorization' : process.env.TOKEN ,
            'Origin':process.env.Origin  ,





        },
    })
        .then(res => res.json())
        .then(json => res.send(json)).catch(err=>res.send(JSON.stringify(err)));
}

module.exports = {
    pay : pay
}