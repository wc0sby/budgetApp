const mon = require('mongoose')

const schema = require('../Schemas/budgetSchema')

module.exports = mon.model('Budget',schema)