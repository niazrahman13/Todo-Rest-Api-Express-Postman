//Basic 

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const Router = require('./src/Router/api')

//
app.use(bodyParser.json())

// Security Library Import

const mongoSanitizer = require('express-mongo-sanitize')
const rateLimiter = require('express-rate-limit')
const xss = require('xss-clean')
const helmet = require('helmet')
const cors = require('cors')
const hpp = require('hpp')

// Security Library Implementation

app.use(mongoSanitizer())
app.use(xss())
app.use(helmet())
app.use(cors ( ))
app.use(hpp())

// Rate Limit usage

const limit = rateLimiter({windowMs: 15*60*1000,max:3000})
app.use(limit)

// Mongoose Import

const mongoose = require('mongoose')

// Database Connection

const URI = 'mongodb://127.0.0.1:27017/ToDo'
const options = {user:'', pass:'', autoIndex:true}

mongoose.connect(URI,options)
.then(() => console.log('Mongoose Connected'))
.catch(()=> console.log('Mongoose Error'))

// Router Implementation

app.use(Router)

// Invalid Router implementation

app.use('*',(req,res) => {
    res.status(404).json({'status':'Invalid Route'})
})

// Exporting Module

module.exports = app