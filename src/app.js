const express = require('express')
const morgan = require('morgan')

const app = express()

const PORT = 3003


//Routes
app.use(require('./routes/home.js'))
app.use(require('./routes/auth.js'))


//Middleware
app.use(morgan('dev'))

//Public or static
app.use(express.static(__dirname + '/public'))

app.listen(PORT)
console.log(`Server on port ${PORT}`)