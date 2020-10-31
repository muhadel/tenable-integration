import async from 'async';
import winston from 'winston';
import User from '../model/user';

export default async () => {
  winston.info('Checking Default Settings...');
  async.series(
    [
      function (done) {
        return createAdminUser(done);
      },
      //   function (done) {
      //     return fun2(done);
      //   },
    ],
    function (err) {
      if (err) winston.warn(err);
      //   console.log('Error', err);
    }
  );
};

const createAdminUser = async (callback) => {
  const user = await User.findOne({ username: 'madel' }).lean();
  if (!user) {
    const user = await User.create({
      username: 'madel',
      password: 'P@ssw0rd',
      firstName: 'Mohamed',
      lastName: 'Adel',
      email: 'mohamed.adel@barqsystems.com',
    });
    if (user) {
      winston.info('Admin user is created successfully.');
      return callback();
    }
  } else {
    winston.info('Admin user is already created.');
    return callback();
  }
};

// const fun2 = (callback) => {
//   console.log('log2');
//   return callback();
// };
