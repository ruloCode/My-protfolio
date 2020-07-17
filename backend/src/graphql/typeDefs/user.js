const { gql } = require('apollo-server-express')

module.exports = gql`
type User {
  id: ID!
  email: String!
  token: String!
  username: String!
  createdAt: String!
}
type MyUser {
  id: String!
  name: String!
  car: [Car]
}
type Car {
  id: ID!
  make: String!,
  model: String!,
  color: String!,
  owner: MyUser!,
}
extend type Query {
  users: [MyUser]
  user(id: ID!): User
  cars: [Car]
  me: MyUser
}

input RegisterInput {
  username: String!
  password: String!
  confirmPassword: String!
  email: String!
}

extend type Mutation {
  register(registerInput: RegisterInput): User!
  login(username: String!, password: String!): User!
}
`;
