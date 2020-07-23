const db = require('mongoose')
db.Promise = global.Promise

const connectDb = async(url)=>{
  await db.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  console.log('MongoDB Connected')
}

module.exports = connectDb