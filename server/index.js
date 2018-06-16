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

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(parser.json())
//Input routes here
app.use(require('./Routers/transactionRouter'))
app.use(require('./Routers/cashRouter'))
app.use(require('./Routers/budgetRouter'))

app.listen(4001, () => console.log('Listening on port 4001!'))