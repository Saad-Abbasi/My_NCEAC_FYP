const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.get('/', (req, res) => {
    res.send('Welcome to Node API')
})
app.get('/getData', (req, res) => {
    res.json({'message': 'Hello World'})
})
app.post('/postData', bodyParser.json(), (req, res) => {
    res.json(req.body)
})
app.listen(3000, () => console.log('Example app listening on port 3000!'))