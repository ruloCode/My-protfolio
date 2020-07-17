const Course = require('../../models/Course')
const checkAuth = require('../../util/check-auth')
const { UserInputError, AuthenticationError } = require('apollo-server')
module.exports = {
  Mutation: {
    async createComment(_, {courseId, body}, context){
        const { username } = checkAuth(context);
        if(body.trim() === '') {
          throw new UserInputError('Empty comment', {
            errors: {
              body: 'Comment body must be not empty'
            }
          })
        }
        const course = await Course.findById(courseId)

        if(course){
          // added to the top of array
          course.comments.unshift({
            body,
            username,
            createdAt: new Date().toDateString()
          })
          await course.save()
          return course
        } else {
          throw new UserInputError('Course Not found')
        }
    },
    async deleteComment(_, { courseId, commentId }, context){
      const { username } = checkAuth( context )
      const course = await Course.findById(courseId)

      if(course){
        const commentIndex = course.comments.findIndex((comment)=> comment.id === commentId)
        // delete only owner of the comment
        if(course.comments[commentIndex].username === username){
          course.comments.splice(commentIndex, 1)
          await course.save()
          return course
        } else {
          throw new AuthenticationError('Action not allowed')
        }
      } else {
        throw new UserInputError('Course not found')
      }
    }
  }
}