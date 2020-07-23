require('dotenv').config();

const config = {
  cloudName: process.env.CLOUD_NAME,
  apiKey: process.env.API_KEY,
  apiSecret: process.env.API_SECRET,
  secretKey: process.env.SECRET_KEY,
  dev: process.env.NODE_ENV !== 'production',
  port: process.env.PORT || 5000,
  host: process.env.HOST || 'http://localhost:',
  cors: process.env.CORS,
  dbUri: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`,
};
module.exports = { config };