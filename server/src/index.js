const express = require("express");
const app = express();
const cors = require("cors");
const { PORT, CLIENT_URL, SECRET } = require("./constants");
const session = require("express-session");
const cookieParser = require("cookie-parser");

//initialize middlewares
app.use(
  cors({ origin: CLIENT_URL || "http://localhost:3000", credentials: true })
);
app.use(express.json());
app.use(cookieParser());
// configure session middleware
app.use(
  session({
    secret: SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
//import routes
const authRoutes = require("./routes/auth");

//initialize routes
app.use("/api", authRoutes);

// START APP
const startApp = () => {
  app.listen(PORT || 4000, (req, res) => {
    console.log(`App is running on port: ${PORT || 4000}`);
  });
};
startApp();
