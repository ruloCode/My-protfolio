const { gql } = require('apollo-server-express')
module.exports = gql`
extend type Query {
  getProfile(profileId: ID!):Profile
  getProfiles: [Profile]
}
extend type Mutation {
  uploadImage(profileId: ID!, filename: String!): String!

  createProfile(profileInput: ProfileInput): Profile!
  deleteProfile(profileId: ID!): String!

  createLanguaje(profileId: ID!, name: String!): Profile!
  deleteLanguaje(profileId: ID!, languajeId: ID!): Profile!

  createSoftSkill(profileId: ID!, name: String!, iconUrl: String!): Profile!
  deleteSoftSkill(profileId: ID!, softSkillId: ID!): Profile!

  createSocialMedia(profileId: ID!, name: String!, url: String!):Profile!
  deleteSocialMedia(profileId: ID!, socialMediaId: ID!): Profile!
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
  profileCover(options: CloudinaryOptions): String
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

scalar CloudinaryOptions
`;
