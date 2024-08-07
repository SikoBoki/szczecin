const express = require('express')
const app = express()
const { port } = require('./config')
const apiRouter = require('./routes/api')
const bodyParser = require('body-parser')
//db
require('./db/mongoose')
//parsery
//Content-type: application/json można wydobyć zawartość pól z aplikacji których //Content-type: to  application/json
app.use(bodyParser.json())

//routes
app.use('/api/', apiRouter)
app.use('/', apiRouter)

//serwer
app.listen(port, function () {
	console.log('serwer słucha http://localhost:' + port)
})
