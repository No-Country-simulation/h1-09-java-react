import passport from "passport";
import { ExtractJwt, Strategy as JwtStrategy } from "passport-jwt";
import User from "../models/User.js";
import Paciente from "../models/Paciente.js";

const cookieExtractor = (req) => {
  let cookie = null
  if (req && req.cookies) {
    cookie = req.cookies.Authorization
  }
  return cookie
}

const opts = {
  jwtFromRequest: cookieExtractor,
  secretOrKey: process.env.JWT_SECRET || "default-secret",
};

passport.use(
  new JwtStrategy(opts, async (jwt_payload, done) => {
    try {
      let user;
      if (jwt_payload.id) {
        user = await User.findByPk(jwt_payload.id);
      }
      if (jwt_payload.idPaciente) {
        user = await Paciente.findByPk(jwt_payload.idPaciente);
      }
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    } catch (err) {
      return done(err, false);
    }
  })
);

export default passport;
