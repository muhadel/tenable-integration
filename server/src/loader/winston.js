import winston, { loggers } from 'winston';

export default async () => {
  winston.add(
    new winston.transports.Console({
      colorize: true,
      timestamp: function () {
        var date = new Date();
        return date.getMonth() + 1 + '/' + date.getDate() + ' ' + date.toTimeString().substr(0, 8) + ' [' + global.process.pid + ']';
      },
    })
  );
  const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
      new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
      new winston.transports.File({ filename: 'logs/combined.log' }),
    ],
  });
  global.logger = logger;
  // logger.log('info', 'This is an information message.');

  if (process.env.NODE_ENV !== 'production') {
    logger.add(
      new winston.transports.Console({
        format: winston.format.simple(),
      })
    );
  }
};
