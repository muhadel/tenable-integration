import winston from 'winston';
import User from '../../model/user';
/** @type {import("express").RequestHandler} */
export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ error: 'Missing username or password.' });
    }
    const user = await User.findOne({ username: username });
    if (user) {
      const isPasswordMatch = user.validatePassword(password);
      if (isPasswordMatch) {
        const token = user.generateAuthToken();
        return res.json({
          token: 'Bearer ' + token,
        });
      } else {
        return res.status(400).json({ error: 'Incorrect password, try again' });
      }
    } else {
      return res.status(400).json({ error: 'User not found' });
    }
  } catch (error) {
    console.log('error', error);

    winston.error(error);
    return res.status(500).json({ error: 'Something went wrong' });
  }
};
