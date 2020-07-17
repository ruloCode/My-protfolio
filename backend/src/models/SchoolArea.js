const { model, Schema } = require('mongoose')

const schoolAreSchema = new Schema({
  description: String,
  areaname: String,
})

module.exports = model('SchoolArea', schoolAreSchema)