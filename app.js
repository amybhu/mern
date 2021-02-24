const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://127.0.0.1:27017/AlienDBex'

const app = express()

mongoose.connect(url, {useNewUrlParser:true,useUnifiedTopology: true })
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

app.use(express.json())

const alienRouter = require('./routes/aliens')
app.use('/aliens',alienRouter)

app.listen(9005, () => {
    console.log('Server started')
})