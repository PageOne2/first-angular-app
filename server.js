const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config({ path: `${__dirname}/config.env` })

const app = require('./app')
const DB = process.env.DATABASE.replace('<password>', process.env.DB_PASSWORD)

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('DB connection successful!'))

const port = process.env.PORT || 8080

const server = app.listen(port, () => {
    console.log(`Listening to port ${port}`)
})

