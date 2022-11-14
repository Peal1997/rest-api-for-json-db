## Rest Api with Express server

## First clone repo and then install npm package

```console
$ npm install 
```

## Server structure
```js
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
```

## Pckages

* Express
* dotenv
* colors
* nodemon
* nodemailer
* multer

live project link : [Education Board result](http://www.educationboardresults.gov.bd/)



