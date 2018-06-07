const express = require('express')
const router = express.Router()


router.get('/:username', (req, res) => {
	let username = req.params.username
	if(username == 'anis') {
		res.send('<h1>user: Anis</h1>')
	} else res.send('<h1>user: not Anis</h1>')
})

module.exports = router
