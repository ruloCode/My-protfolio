const { model, Schema } = require('mongoose')

const profileSchema = new Schema({
  slogan: String,
  profileCover: String,
  professionalProfile: String,
  email: String,
  phone: String,
  location: String,
  username: String,
  createdAt: String,
  softSkills: [
    {
      name: String,
      iconUrl: String,
      username: String,
      createdAt: String,
    },
  ],
  languajes: [
    {
      name: String,
      username: String,
      createdAt: String,
    },
  ],
  socialMedia: [
    {
      name: String,
      url: String,
      username: String,
      createdAt: String,
    },
  ]
})

module.exports = model('profiles', profileSchema)