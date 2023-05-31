const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const cors = require('cors')
const bodyParser = require("body-parser")
const mongoose = require("mongoose")

// Middleware
app.use(express.json())
app.use(bodyParser.json())
require('dotenv').config()

app.use(cors())

// Database Connection
require("./app/config/db.connection")(mongoose)
// Routes
require("./app/routes/index")(app)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
