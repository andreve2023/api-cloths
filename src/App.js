const express = require('express');
const {config} = require('./config/config');
const passport = require('passport');
const bodyParser = require('body-parser');
const cors = require("cors");
const morgan = require("morgan");
const session = require('express-session');
const {routes} = require('./router/index');

const {
    boomErrorHandler,
    errorHandler,
    logError
} = require('./middlewares/errorHandlers');

require('./utils/auth');

const app = express();
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(passport.initialize());

app.use(session({
    secret: config.googleClientSecret,
    resave: false,
    saveUninitialized: false
}));

app.use(cors());
app.use(morgan("dev"));
app.use(express.json())

routes(app)

app.use(logError)
app.use(boomErrorHandler)
app.use(errorHandler);


module.exports = {app}