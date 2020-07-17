const path = require('path')

const Profile = require('../../models/Profile')
const checkAuth = require('../../util/check-auth')
const { AuthenticationError, UserInputError } = require('apollo-server-express')
const cloudinary = require('cloudinary')

const resolvers = {
  Query: {
    me: () => {
      return {
        name: 'Andres'
      }
    },
    async getProfiles(){
      try {
        // sort by created date
        const profiles = await Profile.find();
        return profiles
      } catch {
        throw new Error(err)
      }
    },
    async getProfile(_, { profileId }){
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
  Mutation: {
    async createProfile(_, { profileInput: {
      slogan,
      profileCover,
      professionalProfile,
      email,
      phone,
      location,
      } }, context){
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
    async deleteProfile(_, { profileId }, context){
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
    async createLanguaje(_, {profileId, name}, context){
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
    async deleteLanguaje(_, { profileId, languajeId }, context){
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
    async createSoftSkill(_, {profileId, name, iconUrl}, context){
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
    async deleteSoftSkill(_, { profileId, softSkillId }, context){
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
    async createSocialMedia(_, {profileId, name, url}, context){
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
    async deleteSocialMedia(_, { profileId, socialMediaId }, context){
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
  }
}
module.exports = resolvers;
