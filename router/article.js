const express = require('express')
const router = express.Router()


router.get('/:id', (req, res) => {
	let id = req.params.id
	res.send(`<h2>Article avec id ${id}</h2>`)

})

module.exports = router
