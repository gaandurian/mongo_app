const express = require('express')
const path = require('path')
const app = express()

const PORT = 3200

// app.get('/', (req, res) => {
// 	res.send('Hello this is /')
// })

app.use(express.static(path.join(__dirname, 'public'))) // hedhi kima el htdocs / www mtaa el php


const user = require('./router/user')
const article = require('./router/article')
app.use('/user', user)
app.use('/article', article)
// rajaa taswira
app.get('/productpic', (req, res) => {
	res.sendFile(__dirname + '/image.png')
})
app.listen(PORT, () => {
	console.log('Server started on port ', PORT)
})
