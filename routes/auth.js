const router = require("express").Router();
const passport = require("passport");

const HOMEPAGE_URL = "http://localhost:5000";
const LIVE_URL = "https://glacial-sands-90363.herokuapp.com";

// auth url
router.get(
  "/login/google",
  passport.authenticate("google", {
    scope: ["profile"]
  })
);

// login successful - URL where frontend fetches data
router.get("/login/success", (req, res) => {
  if (req.user) {
    res.json({
      success: true,
      message: "User has successsfully logged in",
      user: req.user,
      cookies: req.cookies
    });
  }
});

// logout redirect
router.get("/logout", (req, res) => {
  req.session.destroy(e => {
    res.redirect(LIVE_URL);
  });
});

// failed login
router.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "User failed to login"
  });
});

// redirect to homepage after succesfull login
router.get(
  "/login/redirect",
  passport.authenticate("google", {
    successRedirect: LIVE_URL,
    failureRedirect: "/login/failed"
  })
);

module.exports = router;
