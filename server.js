require("dotenv").config();
const cors = require("cors");
const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const passport = require("passport");
const passportConfig = require("./config/passport");
const cookieSession = require("cookie-session");
const app = express();

const PORT = process.env.PORT;
const DB = process.env.DB;
const SECRET = process.env.COOKIE_SECRET;

app.use(
  session({
    resave: true,
    secret: SECRET,
    saveUninitialized: true,
    cookie: {
      secure: false
    }
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true }, e => {
  if (e) {
    console.log(e);
  } else {
    console.log("connected to mongodb");
  }
});

app.use(
  cors({
    origin: "http://localhost:3000", // allow to server to accept request from different origin
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true // allow session cookie from browser to pass through
  })
);

app.use("/auth", require("./routes/auth"));

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
