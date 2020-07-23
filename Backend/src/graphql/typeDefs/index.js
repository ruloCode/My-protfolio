
const defaultSchema = require('./default')

const userSchema = require('./user')
const profileSchema = require('./profile')
const courseSchema = require('./course')

module.exports = [defaultSchema, userSchema, profileSchema, courseSchema ];
