require("dotenv").config();
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");
const User = require("../models/user");

const GoogleId = process.env.GOOGLE_CLIENT_ID;
const GoogleSecret = process.env.GOOGLE_CLIENT_SECRET;

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: GoogleId,
      clientSecret: GoogleSecret,
      callbackURL: "/auth/login/redirect"
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ someId: profile.id }).then(currentUser => {
        if (currentUser) {
          // already have this user
          console.log("user is: ", currentUser);
          done(null, currentUser);
        } else {
          // if not, create user in our db
          new User({
            someId: profile.id,
            username: profile.displayName,
            imageURL: profile.profileUrl
          })
            .save()
            .then(newUser => {
              console.log("created new user: ", newUser);
              done(null, newUser);
            });
        }
      });
    }
  )
);
