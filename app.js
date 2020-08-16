const express = require('express') ;
const fetch = require('node-fetch');
const app = express() ;
const PORT = 8000 ;
const route =  require('./routes/PaymentRoutes') ;

app.use('/v1' , route)


app.listen(PORT , ()=>{
    console.log(`Listening to ${PORT}`)
})