import express from 'express';
import winston from 'winston';
import { env, port } from './config';

const app = express();
require('./loader').default(app);

app.listen(port, (err) => {
  if (err) {
    winston.error(err);
    return process.exit(1);
  }
  winston.info('Running in: ' + env);
  winston.info(`Server is running on ${port}`);
});

export default app;
