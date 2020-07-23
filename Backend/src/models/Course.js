const { model, Schema } = require('mongoose')

const courseSchema = new Schema({
  coursename: String,
  iconurl: String,
  createdAt: String,
  username: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
})

module.exports = model('courses', courseSchema)