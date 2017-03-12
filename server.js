var express = require('express')
var path = require('path')
var app = express()

app.use(express.static('public'))

// Path to render index html
app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, './demo', 'index.html'))
})

// Path to return answer for message (will be replaced by api)
app.get('/message', function (req, res) {
	res.json({status: "success", message: "safrsaew"})
})

app.listen(3000, function () {
	console.log('App listening on port 3000')
})