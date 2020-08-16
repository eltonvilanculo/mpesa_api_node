const express = require('express') ;
const fetch = require('node-fetch');
const app = express() ;
const PORT = 8000 ;
require('dotenv').config() ;
const  Routes = express.Router() ;
const pay =  require('../controller/PaymentController')

Routes.get('/pay' , function (req , res) {

    pay.pay(845204801 , 5  , res)
})

module.exports = Routes ;