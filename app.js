const express = require('express')
const cors = require('cors')
const path = require('path')
const CSV = require('./csvModel/csv')

const app = express()

app.use(cors())

app.use('/api/getCsvs', async function(req, res, next) {
    const csv = await CSV.find()
    res.status(200).json({
        status: 'success',
        data: {
            csv
        }
    })
})

module.exports = app