const { gql } = require('apollo-server')

module.exports = gql`

type Course {
  id: ID!
  coursename: String!
  iconurl: String!
  createdAt: String!
}
type SoftSkill{
  id: ID!
  username: String!
  createdAt: String!
  name: String!
  iconUrl: String!
}
type Media{
  id: ID!
  name: String!
  url: String!
  username: String!
  createdAt: String!
}
type Languaje{
  id: ID!
  name: String!
  username: String!
  createdAt: String!

}
type Profile {
  id: ID!
  slogan: String!
  profileCover: String!
  professionalProfile: String!
  email: String!
  phone: String!
  location: String!
  username: String!
  createdAt: String!
  languajes: [Languaje]!
  softSkills: [SoftSkill]!
  socialMedia: [Media]!
  photo: String!
}

input ProfileInput {
  slogan: String!
  profileCover: String!
  professionalProfile: String!
  email: String!
  phone: String!
  location: String!
}
type User {
  id: ID!
  email: String!
  token: String!
  username: String!
  createdAt: String!
}
type RandomText {
  name: String!
}
type Query {
  getCourses: [Course]
  getCourse(courseId: ID!):Course
  getProfile(profileId: ID!):Profile
  getProfiles: [Profile]
  me: RandomText
}

input RegisterInput {
  username: String!
  password: String!
  confirmPassword: String!
  email: String!
}
type File {
  id: ID!
  path: String!
  filename: String!
  mimetype: String!
  encoding: String!
}
scalar CloudinaryOptions

type Mutation {

  uploadImage( profileId: ID!,filename: String!): String!

  register(registerInput: RegisterInput): User!
  login(username: String!, password: String!): User!

  createProfile(profileInput: ProfileInput): Profile!
  deleteProfile(profileId: ID!): String!

  createCourse(coursename: String!, iconurl: String!): Course!
  deleteCourse(courseId: ID!): String!

  createLanguaje(profileId: ID!, name: String!): Profile!
  deleteLanguaje(profileId: ID!, languajeId: ID!): Profile!

  createSoftSkill(profileId: ID!, name: String!, iconUrl: String!): Profile!
  deleteSoftSkill(profileId: ID!, softSkillId: ID!): Profile!

  createSocialMedia(profileId: ID!, name: String!, url: String!):Profile!
  deleteSocialMedia(profileId: ID!, socialMediaId: ID!): Profile!


}

`