const express = require("express");
const { config } = require("./config/config");
const passport = require("passport");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const session = require("express-session");
const { routes } = require("./router/index");

const app = express();

const {
  boomErrorHandler,
  errorHandler,
  logError,
} = require("./middlewares/errorHandlers");

app.use(
  cors({
    allowedOrigins: ["*"],
  })
);
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

// app.use(cors())

require("./utils/auth");

// googleProxy(app)
// app.use(googleProxy)

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());

app.use(
  session({
    secret: "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",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(morgan("dev"));

routes(app);

app.use(logError);
app.use(boomErrorHandler);
app.use(errorHandler);

module.exports = { app };
