import passport from "passport";
import { Strategy } from "passport-local";
import { mockUsers } from "../utils/constants.mjs";


passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  try {
    const findUser = mockUsers.find((user) => user.id === id);
    if (!findUser) throw new Error('User not found');
    done(null, findUser);
  } catch (error) {
    done(error, null);
  }
});

export default passport.use(
  new Strategy({ usernameField: 'email' }, (email, password, done) => {
    try {
      const findUser = mockUsers.find((user) => user.email === email);

      if (!findUser) throw new Error('User not found');
      if (findUser.password !== password) throw new Error('Wrong password');

      done(null, findUser);
    } catch (error) {
      done(error, null);
    }
  })
);
