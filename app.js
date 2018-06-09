const mongoose = require('mongoose')
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()
const Article = require('./models/article')
const PORT = 3200

// Databse connection
mongoose.connect('mongodb://localhost:27017/mongodb_app_db')
mongoose.connection.on('connected', () => console.log('Connected to database ', 'mongodb://localhost:27017/mongodb_app_db'))
mongoose.connection.on('error', (err) => console.log('Connection error ', err))

// app.get('/', (req, res) => {
// 	res.send('Hello this is /')
// })

app.use(express.static(path.join(__dirname, 'public'))) // hedhi kima el htdocs / www mtaa el php
app.use(bodyParser.json())

const user = require('./router/user')
const article = require('./router/article')
app.use('/user', user)
app.use('/article', article)


// rajaa taswira
app.get('/productpic', (req, res) => {
	res.sendFile(__dirname + '/image.png')
})



// making an object from the model and saving it to the database
let newArticle = Article({
	title: 'titre de l\'article',
	body: 'Body mtaa l\'article',
	authorId: '14FQ6S5F4564'
})

newArticle.save()





app.listen(PORT, () => {
	console.log('Server started on port ', PORT)
})
