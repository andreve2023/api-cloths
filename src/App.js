const express = require('express');
const passport = require('passport');
const cors = require("cors");
const morgan = require("morgan");
const session = require('express-session');
const {routes} = require('./router/index');
const{config} = require('./config/config');
const {validarParams} = require('./middlewares/validarCheckParams')
const {
    boomErrorHandler,
    errorHandler,
    logError
} = require('./middlewares/errorHandlers');
require('./utils/auth');
const app = express()
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

// app.use(validarParams)
app.use(logError)
app.use(boomErrorHandler)
app.use(errorHandler);


module.exports = {app}