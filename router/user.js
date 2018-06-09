const express = require('express')
const router = express.Router()
const User = require('../models/user')

router.get('/view/:username', (req, res) => {
	let username = req.params.username
	if(username == 'anis') {
		res.send('<h1>user: Anis</h1>')
	} else res.send('<h1>user: not Anis</h1>')
})

router.post('/addUser', (req, res) => {
	let user = User({
		username: req.body.username,
		email: req.body.email,
		password: req.body.password,
	})
	user.save((err, data) => {
		if (err) res.send({ success: false, message: err})
		else res.send({success: true, data, message: 'User added to database'})
	})
})

router.get('/list' ,(req, res) => {
		User.find().then(
		data => res.send({ success: true, users: data}),
		err => res.send({ success: false, message: err})
	)
})

router.post('/remove', (req, res) => {
	_id = req.body._id
	// User.find({ _id: _id })
	User.findById(_id).then(
		userAccount => userAccount.remove((err, data) => {
			if(err) res.send({ success: false, message: err })
			else res.send({ success: true, user: data, message: 'User deleted'})
		}),
		err => res.send({ success: false, message: err })
	)
})
module.exports = router
