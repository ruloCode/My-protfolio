const courseResolvers = require('./courses')
const userResolvers = require('./users')
const profileResolvers = require('./profiles')
// combine resolvers
module.exports = {
  Query: {
    ...courseResolvers.Query,
    ...profileResolvers.Query
  },
  Mutation: {
    ...userResolvers.Mutation,
    ...courseResolvers.Mutation,
    ...profileResolvers.Mutation,
  }
}