const { ApolloServer } = require('apollo-server')
const { config } = require('./config/index')

const db = require('./mongoDB')
const typeDefs = require('./graphql/typeDefs')
const resolvers = require('./graphql/resolvers/index')




// Apollo server

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context:  ({req})=>({req})
})

const runServer = async ()=>{
  await db(config.dbUri)
  const serverResponse = await server.listen({ port: config.port})
  console.log(`Server running at ${serverResponse.url}`)
}
runServer();






