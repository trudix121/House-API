const express = require('express')
const morgan = require('morgan')
require("dotenv").config()
const api = require('./api/src/api')
const db = require('./api/db')
const app = express()
app.use(morgan('dev'))

app.use('/api', api)

app.listen(5000, ()=>{
    console.log(`Server Started on https://localhost:5000}`)
})

