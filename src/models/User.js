const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  //TODO: these should be an array of ID referencing the tournaments and compaines collection.
  //I'll leave it as strings for now.
  companies: [String],
  tournaments: [String],
})

module.exports = mongoose.model('Users', userSchema)