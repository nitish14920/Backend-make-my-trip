require('dotenv').config()
const express = require("express")
const bodyParser = require('body-parser')
const app = express()
const mongoose = require("mongoose")
const flightRoute = require('./Routes/flight')


mongoose.connect(process.env.DATABASE_URL,{ useNewUrlParser: true},()=>{console.log("connected")})

app.use(bodyParser.json())

// Middleware for flightRoutes
app.use('/flights',flightRoute)


app.listen(3000,()=> console.log("Listening on 3000"))