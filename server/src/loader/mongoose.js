import mongoose from 'mongoose';
import winston from 'winston';
import { mongo } from '../config';

export default async () => {
  let mongoConnectionUri = '';
  if (!mongo.username) {
    mongoConnectionUri = 'mongodb://' + mongo.host + ':' + mongo.port + '/' + mongo.database + '?authSource=admin';
  } else {
    if (mongo.shared) {
      mongoConnectionUri = 'mongodb+srv://' + mongo.username + ':' + mongo.host + ':' + mongo.port + '/' + mongo.database + '?authSource=admin';
    } else {
      mongoConnectionUri = 'mongodb://' + mongo.username + ':' + mongo.host + ':' + mongo.port + '/' + mongo.database + '?authSource=admin';
    }
  }
  //   MONGO.CONFIG
  const options = {
    useNewUrlParser: true,
    autoReconnect: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  };
  await mongoose
    .connect(mongoConnectionUri, options)
    .then(() => {
      winston.info('Connected to MongoDB');
    })
    .catch((error) => {
      winston.log('Oh no, something went wrong with DB! - ' + error.message);
    });
};
