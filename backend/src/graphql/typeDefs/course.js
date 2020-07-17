const { gql } = require('apollo-server-express')

module.exports = gql`
type Course {
  id: ID!
  coursename: String!
  iconurl: String!
  createdAt: String!
}
extend type Query {
  getCourses: [Course]
  getCourse(courseId: ID!):Course
}
extend type Mutation {
  createCourse(coursename: String!, iconurl: String!): Course!
  deleteCourse(courseId: ID!): String!
}
`;
