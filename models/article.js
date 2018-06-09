const mongoose = require('mongoose')

const ArticleSchema = mongoose.Schema({
    title: { type: String, required: true },
    body: { type: String, required: true },
    authorId: { type: String, required: true }
})

module.exports = mongoose.model('Article', ArticleSchema)