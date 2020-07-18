const express = require('express')
const app = express();
const cors = require('cors')
const fileUpload = require('express-fileupload')
const { ApolloServer } = require('apollo-server-express')
const { config: {port, dbUri} } = require('./config/index')

const db = require('./mongoDB')
const typeDefs = require('./graphql/typeDefs/index')
const resolvers = require('./graphql/resolvers/index');
const { addPath } = require('graphql/jsutils/Path');

// Apollo server

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context:  ({req})=>({req})
})
server.applyMiddleware({app})
app.disable('x-powered-by')
app.use(cors());
app.use(fileUpload());

app.post('/upload', (req, res)=>{
  let uploadedFile = req.files.file;
  const filename = req.files.file.name;
  uploadedFile.mv(`${__dirname}/uploads/${filename}`, error => {
    if(error){
      return res.status(500).send(error);
    }
    return res.json(filename)
  })
})

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





