const Course = require('../../models/Course')
const checkAuth = require('../../util/check-auth')
const { AuthenticationError } = require('apollo-server')


module.exports = {
  Query: {
    async getCourses(){
      try {
        // sort by created date
        const courses = await Course.find().sort({ createdAt: -1});
        return courses
      } catch {
        throw new Error(err)
      }
    },
    async getCourse(_, { courseId }){
      try {
        const course = await Course.findById(courseId);
        if(course){
          return course
        } else {
          throw new Error('Course not found')
        }
      } catch (err) {
        throw new Error(err)
      }
    }
  },
  Mutation: {
    async createCourse(_, { coursename, iconurl }, context){
      // check jwt
      const user = checkAuth(context)
      console.log(user)

      const newCourse = new Course({
        coursename,
        iconurl,
        username: user.username,
        createdAt: new Date().toISOString(),
        // populated data
        user: user.id,

      });

      const course = await newCourse.save()
      return course

    },
    async deleteCourse(_, { courseId }, context){
      const user = checkAuth(context)
      // delete own courses
      try{
        const course = await Course.findById(courseId);
        if(user.username === course.username){
          await course.delete();
          return 'Course deleted successfully'
        } else {
          throw new AuthenticationError('Action not allowed')
        }
      } catch (err){
        throw new Error(err)
      }
    }
  }
}