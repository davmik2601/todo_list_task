import { Strategy as JwtStrategy } from "passport-jwt";
import { ExtractJwt } from "passport-jwt";
import keys from "../../../config/keys.js";
import UserService from "../services/UserService.js";

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: keys.USER_ACCESS_TOKEN_SECRET,
  passReqToCallback: true,
}

export default function passportJwt(passport) {
  
  passport.use(new JwtStrategy(opts, async (req, payload, done) => {

    try {
      const user = await UserService.getById(payload.id, "id email");
      if(user) {
        req.user = user; 
        return done(null, user);
      }
      return done(null, false);

    } catch(err) {
      return done(err, false);
    }
  }));
}