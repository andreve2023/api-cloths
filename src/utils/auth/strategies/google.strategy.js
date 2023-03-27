const GoogleStrategy = require('passport-google-oauth2').Strategy;
const { config } = require('../../../config/config');
const {UserService} = require('../../../services/user.service');

const userService = new UserService();

const googleStrategy = new GoogleStrategy({
    clientID: config.googleClientId,
    clientSecret: config.googleClientSecret,
    callbackURL: 'http://localhost:3001/api/v1/auth/google/callback',
    passReqToCallback   : true
},function(request, accessToken, refreshToken, profile, done) {
    const userFind = userService.findUserByEmail(profile.email)
    if (userFind) {
        console.log(profile)
        return done(null, profile)
    }else {
        return done(null, profile)
    }
})


module.exports = {googleStrategy}