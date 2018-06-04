const mon = require('mongoose')

const schema = require('../Schemas/transactionSchema')

module.exports = mon.model('Transaction',schema)