const express = require('express')
const path = require('path')
const cors = require('cors')

const CSV = require('./csvModel/csv')

const app = express()

app.use(cors())

if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')))

    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
    })
}

app.use('/tabela', async function(req, res, next) {
    const csv = await CSV.find()
    res.status(200).json({
        status: 'success',
        data: {
            csv
        }
    })
})

module.exports = app