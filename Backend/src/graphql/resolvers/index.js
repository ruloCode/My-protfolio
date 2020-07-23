const courseResolvers = require('./courses')
const userResolvers = require('./users')
const profileResolvers = require('./profiles')



// combine resolvers
module.exports = [
  userResolvers,
  courseResolvers,
  profileResolvers,
];
