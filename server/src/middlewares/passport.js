import passport from 'passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { jwt } from '../config';
export const authenticated = (req, res, next) => {
  passport
    .use(
      new Strategy(
        {
          secretOrKey: jwt.secret,
          jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        },
        function (userPayload, done) {
          // getRepository(User)
          //   .findOne({ where: { id: userPayload.id }, relations: ["userStatus"], select: ["id", "userStatus"] })
          //   .then((usr) => {
          //     let { userStatus } = usr;
          //     if (userStatus.name === EUserStatus.APPROVED) {
          //       let user: IUserContext = { ...userPayload, ...usr };
          //       return done(null, user);
          //     }
          //     return done(null, false);
          //   })
          //   .catch((err) => {
          //     //server error
          //     console.log(err);
          //     return done(err, false);
          //   });
        }
      )
    )
    .authenticate('jwt', { session: false }, (err, user, info) => {
      if (!!info || !!err) {
        return res.status(401).json({
          error: `Unauthenticated access`,
        });
      }
      req.user = user;
      return next();
    })(req, res, next);
};
