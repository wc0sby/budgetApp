const mon = require('mongoose')

const schema = require('../Schemas/cashSchema')

module.exports = mon.model('Cash',schema)