const passport = require("passport");
const LocalStratergy = require("passport-local").Strategy;
const passportJwt = require("passport-jwt");

let JwtStratergy = passportJwt.Strategy;
let ExtractJwt = passportJwt.ExtractJwt;

const bcrypt = require("bcrypt");
const { jwtUtil } = require("../util");
const { jwtConfig } = require("../config");

// Passport LocalStratergy for authenticating with a username and password.
passport.use(
  new LocalStratergy(
    {
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true,

    },
    async (req, email, password, done) => {
      try {
        console.log(email)
        let user = await prisma.user.findUnique({
          where: {
            email: email.toLowerCase().trim()
          }
        })

        console.log(user)
        // if (user && user.verified == false) {
        //   throw new Error("User not verified")
        // }

        if (user && user.password) {
          // if(password == user.password){
          //   console.log("this email is valid");  

          //   const tokens = await generateTokens(user);
          //   return done(null , {user:user , ...tokens})
          // }


          if (bcrypt.compareSync(password, user.password)) {
            console.log("this email is valid");

            const tokens = generateTokens(user);
            return done(null, { user: user, ...tokens })
          }
        }
        throw new Error("invalid user credentials!")

      } catch (error) {
        return done(error, null)
      }
    }
  )
)

let jwtOption = {
  ...jwtConfig,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: jwtConfig.secretKey,
}
let verifyCb = async (jwt_payload, done) => {
  try {
    console.log("jwt_payload.type", jwt_payload.type);
    console.log("jwt_payload", jwt_payload.type !== jwtUtil.TokenType.ID_TOKEN);

    if (jwt_payload.type !== jwtUtil.TokenType.ID_TOKEN) {
      throw new Error("invalid token..!")
    }

    let user = await prisma.user.findUnique({
      where: {
        id: jwt_payload.id
      }
    })
    if (user) {
      return done(null, user);
    } else {
      return done("Invalid user..!")

    }
  } catch (error) {
    return done(error);
  }

}

passport.use(
  new JwtStratergy(jwtOption, verifyCb)
)

function generateTokens(payload) {
  const token = jwtUtil.generate({ ...payload, type: jwtUtil.TokenType.ID_TOKEN });
  const refreshToken = jwtUtil.generateRefreshToken({ ...payload, type: jwtUtil.TokenType.REFRESH_TOKEN });
  return { token, refreshToken }
}

module.exports.generateSignInToken = (user) => {
  const tokens = generateTokens(user)
  return { user: user, ...tokens }
}

module.exports.jwtAuth = (req, res, next) => {
  passport.authenticate('jwt', { session: false }, (error, user, info) => {
    if (error || info) {

      return res.status(401).json({
        success: false,
        message: error?.message || info?.message
      })
    }

    req.user = user
    return next();
  })(req, res, next);
}