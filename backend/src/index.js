const express = require('express')
const app = express();
const cors = require('cors')

const { ApolloServer } = require('apollo-server-express')
const { config: {port, dbUri} } = require('./config/index')

const db = require('./mongoDB')
const typeDefs = require('./graphql/typeDefs/index')
const resolvers = require('./graphql/resolvers/index')

// Apollo server

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context:  ({req})=>({req})
})
server.applyMiddleware({app})
app.disable('x-powered-by')
app.use(cors());

const runServer = async ()=>{
  try {
    await db(dbUri)
    app.listen({ port }, ()=> {
      console.log(`http://localhost:${port}${server.graphqlPath}`)
    })
  } catch (error) {
    throw new Error(error)
  }
}
runServer();





