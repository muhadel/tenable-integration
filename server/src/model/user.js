import { model, Schema } from 'mongoose';
import { hashSync, genSaltSync, compareSync } from 'bcryptjs';
import jsonwebtoken from 'jsonwebtoken';
import { saltRounds, jwt } from '../config';

const userSchema = Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
});

userSchema.pre('save', async function (next) {
  const user = this;
  user.password = await hashSync(user.password, genSaltSync(Number(saltRounds)));
  next();
});

userSchema.methods.validatePassword = function (password) {
  return compareSync(password, this.password);
};

userSchema.methods.generateAuthToken = function () {
  return jsonwebtoken.sign({ id: this.id, username: this.username }, jwt.secret, {
    expiresIn: jwt.expires,
  });
};
export default model('users', userSchema);
