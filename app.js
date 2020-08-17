const express = require('express') ;
const fetch = require('node-fetch');
const app = express() ;
const PORT = 8002 ;
const route =  require('./routes/PaymentRoutes') ;

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
})

app.use('/v1' , route)


app.listen(PORT , ()=>{
    console.log(`Listening to ${PORT}`)
})