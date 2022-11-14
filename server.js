const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()

//init port
const PORT = process.env.PORT || 808

//express init
const app = express();

//express middlewire
app.use(express.json());
app.use(express.urlencoded({extended : false}))


//listen port
app.listen(PORT , ()=> {
    console.log(`Server is running on ${PORT}`.bgGreen.black);
})