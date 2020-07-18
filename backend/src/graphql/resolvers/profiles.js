const path = require('path')
const { config: {cloudName, apiKey, apiSecret}} = require('../../config/index')
const Profile = require('../../models/Profile')
const checkAuth = require('../../util/check-auth')
const { AuthenticationError, UserInputError } = require('apollo-server-express')
const cloudinary = require('cloudinary')
const { GraphQLScalarType } = require('graphql')

cloudinary.config({
  cloud_name: cloudName,
  api_key: apiKey,
  api_secret: apiSecret,
})

const resolvers = {
  Query: {
    me: () => {
      return {
        name: 'Andres'
      }
    },
    getProfiles: async ()=>{
      try {
        // sort by created date
        const profiles = await Profile.find();
        return profiles
      } catch {
        throw new Error(err)
      }
    },
    
    getProfile: async (_, { profileId })=>{
      try {
        const profile = await Profile.findById(profileId);
        if(profile){
          return profile
        } else {
          throw new Error('Profile not found')
        }
      } catch (err) {
        throw new Error(err)
      }
    }
  },
  Profile: {
    profileCover: (parent, { options })=>{
      console.log(options)
      // create full url
      let url = cloudinary.url(parent.profileCover)
      if (options) {
        // with: Int, q_auto: Boolean, f_auto: Boolean, face: 'face'
        const [ width, q_auto, f_auto, face ] = options;
        const cloudinaryOptions = {
          ...(q_auto === 'true' && { quality: 'auto'}),
          ...(f_auto === 'true' && {fetch_format: 'auto'}),
          ...(face && {crop: 'thumb', gravity: 'face'}),
          width,
          secure: true,
        };
        url = cloudinary.url(parent.profileCover, cloudinaryOptions)
        return url
      }
      return url;
    }
  },
  Mutation: {
    uploadImage: async (parent, { profileId, filename }, context) => {
      const {username} = checkAuth(context)
      if(!username){
        throw new Error('Not allowed')
      }
      // get de main path exec
      const mainDir = path.dirname(require.main.filename)
      filename = `${mainDir}/uploads/${filename}`
      // uplaod image require a full path of image
      try {
        const photo = await cloudinary.v2.uploader.upload(filename)
        // update profileCover
        const profile = await Profile.findById(profileId)
        profile.profileCover = `${photo.public_id}.${photo.format}`
        profile.save()
        return profile.profileCover
      } catch (error) {
        throw new Error(error)
      }

    },
    createProfile: async (_, { profileInput: {
      slogan,
      profileCover,
      professionalProfile,
      email,
      phone,
      location,
      } }, context)=>{
      // check jwt
      const {username} = checkAuth(context)

      const newProfile = new Profile({
        slogan,
        profileCover,
        professionalProfile,
        email,
        phone,
        location,
        username,
        createdAt: new Date().toISOString(),
        // populated data
      });

      const profile = await newProfile.save()
      return profile

    },
    deleteProfile: async (_, { profileId }, context)=>{
      const user = checkAuth(context)
      try{
        const profile = await Profile.findById(profileId);
        if(user.username === profile.username){
          await profile.delete();
          return 'Profile deleted successfully'
        } else {
          throw new AuthenticationError('Action not allowed')
        }
      } catch (err){
        throw new Error(err)
      }
    },
    createLanguaje: async (_, {profileId, name}, context)=>{
      const { username } = checkAuth(context);
      if(name.trim() === '') {
        throw new UserInputError('Empty comment', {
          errors: {
            body: 'Languaje body must be not empty'
          }
        })
      }
      const profile = await Profile.findById(profileId);

      if(profile){
        // added to the top of array
        profile.languajes.unshift({
          name,
          username,
          createdAt: new Date().toDateString()
        })
        await profile.save()
        return profile
      } else {
        throw new UserInputError('Profile Not found')
      }
    },
    deleteLanguaje: async (_, { profileId, languajeId }, context)=>{
      const { username } = checkAuth( context )
      const profile = await Profile.findById(profileId)

      if(profile){
        const languajeIndex = profile.languajes.findIndex((languaje)=> languaje.id === languajeId)
        // delete only owner of the comment
        if(profile.languajes[languajeIndex].username === username){
          profile.languajes.splice(languajeIndex, 1)
          await profile.save()
          return profile
        } else {
          throw new AuthenticationError('Action not allowed')
        }
      } else {
        throw new UserInputError('Profile not found')
      }
    },
    createSoftSkill: async (_, {profileId, name, iconUrl}, context)=>{
      const { username } = checkAuth(context);
      if(name.trim() === '') {
        throw new UserInputError('Empty comment', {
          errors: {
            body: 'Name body must be not empty'
          }
        })
      }
      if(iconUrl.trim() === '') {
        throw new UserInputError('Empty comment', {
          errors: {
            body: 'IconUrl body must be not empty'
          }
        })
      }
      const profile = await Profile.findById(profileId);

      if(profile){
        // added to the top of array
        profile.softSkills.unshift({
          name,
          iconUrl,
          username,
          createdAt: new Date().toDateString()
        })
        await profile.save()
        return profile
      } else {
        throw new UserInputError('Profile Not found')
      }
    },
    deleteSoftSkill: async (_, { profileId, softSkillId }, context)=>{
      const { username } = checkAuth( context )
      const profile = await Profile.findById(profileId)

      if(profile){
        const softSkillsIndex = profile.softSkills.findIndex((softSkill)=> softSkill.id === softSkillId)
        // delete only owner of the comment
        if(profile.softSkills[softSkillsIndex].username === username){
          profile.softSkills.splice(softSkillsIndex, 1)
          await profile.save()
          return profile
        } else {
          throw new AuthenticationError('Action not allowed')
        }
      } else {
        throw new UserInputError('Profile not found')
      }
    },
    createSocialMedia: async (_, {profileId, name, url}, context)=>{
      const { username } = checkAuth(context);
      if(name.trim() === '') {
        throw new UserInputError('Empty comment', {
          errors: {
            body: 'Name body must be not empty'
          }
        })
      }
      if(url.trim() === '') {
        throw new UserInputError('Empty comment', {
          errors: {
            body: 'Name body must be not empty'
          }
        })
      }
      const profile = await Profile.findById(profileId);

      if(profile){
        // added to the top of array
        profile.socialMedia.unshift({
          name,
          url,
          username,
          createdAt: new Date().toDateString()
        })
        await profile.save()
        return profile
      } else {
        throw new UserInputError('Profile Not found')
      }
    },
    deleteSocialMedia: async (_, { profileId, socialMediaId }, context)=>{
      const { username } = checkAuth( context )
      const profile = await Profile.findById(profileId)

      if(profile){
        const socialMediaIndex = profile.socialMedia.findIndex((socialMedia)=> socialMedia.id === socialMediaId)
        // delete only owner of the comment
        if(profile.socialMedia[socialMediaIndex].username === username){
          profile.socialMedia.splice(socialMediaIndex, 1)
          await profile.save()
          return profile
        } else {
          throw new AuthenticationError('Action not allowed')
        }
      } else {
        throw new UserInputError('Profile not found')
      }
    }
  },
  CloudinaryOptions: new GraphQLScalarType({
    name: 'CloudinaryOptions',
    parseValue(value){
      return value
    },
    serialize(value){
      return value
    },
    parseLiteral(ast){
      return ast.value.split(',')
    }
  })
}
module.exports = resolvers;
