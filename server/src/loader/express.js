import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import path from 'path';
import rateLimit from 'express-rate-limit';
import routes from '../routes';
import { prefix } from '../config';

export default (app) => {
  app.use(express.static(path.join(__dirname, '../public')));
  app.set('trust proxy', 1);
  app.use(cors());
  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: false, limit: '1000kb' }));
  app.use(bodyParser.json());
  app.use(helmet());
  app.use(compression());
  // limit each IP to 6 requests per windowMs (1 Min.)
  app.use(rateLimit({ windowMs: 60 * 1000, max: 60 }));
  app.use(prefix, routes);
  app.get('/health', (req, res) => {
    res.status(200).send('OK');
  });

  // error handler for unmatched routes or api calls
  // app.use((req, res, next) => {
  //   res.sendFile(path.join(__dirname, '../public', '404.html'));
  // });
};
