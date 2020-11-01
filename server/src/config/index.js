const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../.env') });

const {
  NODE_ENV,
  HOST,
  PORT,
  JWT_SECRET_KEY,
  JWT_EXPIRES_IN,
  SALT_ROUNDS,
  MONGO_HOST,
  MONGO_PORT,
  MONGO_USERNAME,
  MONGO_PASSWORD,
  MONGO_DB_NAME,
  TENABLE_HOST,
  TENABLE_ACCESS_KEY,
  TENABLE_SECRET_KEY,
} = process.env;

module.exports = {
  env: NODE_ENV || 'development',
  host: HOST || 'localhost',
  port: PORT || '5000',
  prefix: '/api',
  nonSecureRoutes: ['/', '/api/swagger'],
  jwt: {
    secret: JWT_SECRET_KEY || 'mysupersecretkey',
    expires: JWT_EXPIRES_IN || '10h',
  },
  saltRounds: SALT_ROUNDS || 10,
  mongo: {
    host: MONGO_HOST || 'localhost',
    port: MONGO_PORT || '27017',
    username: MONGO_USERNAME || '',
    password: MONGO_PASSWORD || '',
    database: MONGO_DB_NAME || 'tenablesc',
    shared: false,
  },
  tenable: {
    host: TENABLE_HOST || 'https://192.168.5.44',
    accessKey: TENABLE_ACCESS_KEY || '9d5496d3d78e4cf498b360e818090b7f',
    secretkey: TENABLE_SECRET_KEY || '428f0a89975a421d917d1f9129be385c',
  },
};
