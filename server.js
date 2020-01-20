require("dotenv").config();
const cors = require("cors");
const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const passport = require("passport");
const passportConfig = require("./config/passport");
const path = require("path");
const app = express();

// Global variables
const PORT = process.env.PORT;
const DB = process.env.DB;
const SECRET = process.env.COOKIE_SECRET;

app.use(express.static(path.join(__dirname, "client/build")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

// Middleware for JSON, passport, session and requests
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

// Connect to database
mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true }, e => {
  if (e) {
    console.log(e);
  } else {
    console.log("connected to mongodb");
  }
});

// Enable CORS requests (requests between front- and backend)
app.use(
  cors({
    origin: "https://glacial-sands-90363.herokuapp.com/",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true
  })
);

// Routes
app.use("/auth", require("./routes/auth"));

// Server hosting
app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
