require('dotenv').config()

const express = require('express')
const parser = require('body-parser')
const mon = require('mongoose')

const app = express()
const db = mon.connection

mon.connect(process.env.MDB ? process.env.MDB : console.log("Missing MDB environment variable"))
mon.Promise = global.Promise
db.on('error',console.error.bind(console, 'connection-error'))
db.once('open',()=>console.log('Connected to DB'))

app.use(parser.json())
//Input routes here
app.use(require('./Routers/transactionRouter'))

app.listen(4001, () => console.log('Listening on port 4001!'))