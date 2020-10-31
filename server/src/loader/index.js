import winstonLoader from './winston';
import mongooseLoader from './mongoose';
import expressLoader from './express';
import defaultsLoader from './defaults';

export default async (expressApp) => {
  await winstonLoader();
  await mongooseLoader();
  await expressLoader(expressApp);
  await defaultsLoader();
};
