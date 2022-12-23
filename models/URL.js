const mongoose = require('mongoose')
const Schema = mongoose.Schema

const urlSchema = new Schema({
  shortenURL: { type: String, required: true },
  originalURL: { type: String, required: true },
})

module.exports = mongoose.model('URL', urlSchema)