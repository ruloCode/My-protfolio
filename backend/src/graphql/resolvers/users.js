const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { UserInputError } = require('apollo-server');

const { validateRegisterInput, validateLoginInput } = require('../../util/validators')
const { config: { secretKey }} = require('../../config/index')
const User = require('../../models/User')

function generateToken(user){
  return jwt.sign({
    id: user.id,
    email: user.email,
    username: user.username
  },
  secretKey, { expiresIn: '1h'});
}
module.exports = {
  Mutation: {
    async login(_, { username, password }){
      const {errors, valid } = validateLoginInput(username, password);
      // Validate data
      if(!valid){
        throw new UserInputError('Erros', { errors })
      }
      // Make sure user already exist
      const user = await User.findOne({ username })
      if(!user){
        errors.general = 'User not found'
        throw new UserInputError('Wrong credentials', { errors })
      }
      // Validate user hashed password
      const match = await bcrypt.compare(password, user.password);
      if(!match){
        errors.general = 'Wrong credentials'
        throw new UserInputError('Wrong credentials', { errors })
      }

      // return sign token
      const token = generateToken(user)
      return {
        ...user._doc,
        id: user._id,
        token
      }

    },
    async register(
      _,
      { registerInput: {username, email, password, confirmPassword}}
      ){
      // Validate user data
      const { valid, errors } = validateRegisterInput(username, email, password, confirmPassword)
      if (!valid){
        throw new UserInputError('Errors', { errors} )
      }
      // Make sure user doesnt already exist
      const user = await User.findOne({username})
      if(user) {
        throw new UserInputError('Username is taken', {
          errors: {
            username: 'This username is taken'
          }
        })
      }
      // Hash password
      password = await bcrypt.hash(password, 12)
      const newUser = new User({
        email,
        username,
        password,
        createdAt: new Date().toISOString()
      })
      // create user in Mongo
      const res = await newUser.save()

      // sign token
      const token = generateToken(res)

      // return fields
      return {
        ...res._doc,
        id: res._id,
        token
      }
    }
  }
}