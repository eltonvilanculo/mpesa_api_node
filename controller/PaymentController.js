const fetch = require('node-fetch');
require('dotenv').config() ;
const pay =  function (number ,  amount ,  response ) {

    const message = {
        number : number ,
        amount : amount , number
    }


    fetch('https://api.github.com/users/github')
        .then(res => res.json())
        .then(json => response.send(json));
}

module.exports = {
    pay : pay
}