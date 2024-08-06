const express = require('express')
const app = express()
const { port } = require('./config')

//routes
const apiRouter = require('./routes/api')
app.use('/', apiRouter)

//serwer
app.listen(port, function () {
	console.log('serwer słucha http://localhost:' + port)
})
