const mongoose = require('mongoose')

const csvSchema = mongoose.Schema({
    nome: String,
    sobrenome: String,
    idade: String,
    cidade: String,
    email: String
})

const CSV = mongoose.model('CSV', csvSchema, 'csv')

module.exports = CSV