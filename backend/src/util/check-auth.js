const jwt = require('jsonwebtoken')
const { AuthenticationError } = require('apollo-server-express')
const { config: {secretKey}} = require('../config/index')

module.exports = (context) => {
  const authHeader = context.req.headers.authorization;
  if(authHeader){
    // bearer ... token
    const token = authHeader.split('Bearer ')[1];
    if(token){
      try{
        const user = jwt.verify(token, secretKey)
        return user;
      } catch (err) {
        throw new AuthenticationError('Invalid/Expired token')
      }
    }
    throw new Error('Authentication token must be \'Bearer [token] ')
  }
  throw new Error('Authorization header must be provided ')

}