/*function requireHTTPS(req, res, next) {
    if (!req.secure && req.get('x-forwarded-proto') !== 'https') {
        return res.redirect('https://' + req.get('host') + req.url);
    }
    next();
}*/

const express = require('express')
const cors = require('cors')
const path = require('path')
const CSV = require('./csvModel/csv')

const app = express()

app.use(cors())
//app.use(requireHTTPS);
app.use(express.static(path.join(__dirname, '/client/dist/app-test')));

app.use('/tabela', async function(req, res, next) {
    const csv = await CSV.find()
    res.status(200).json({
        status: 'success',
        data: {
            csv
        }
    })
})
    
app.get('*', function(req, res) {
    res.sendFile('index.html', {root: path.join(__dirname, '/client/dist/app-test/')}
    );
});


module.exports = app