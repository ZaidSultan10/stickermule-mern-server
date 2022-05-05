const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const PORT = 5000

const app = express()
const router = express.Router()

app.listen(PORT, () => {
    console.log(`SERVER LISTENING ON PORT : ${PORT}`)
})