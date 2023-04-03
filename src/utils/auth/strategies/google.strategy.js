const GoogleStrategy = require('passport-google-oauth2').Strategy;
// const { config } = require('../../../config/config');
// const {UserService} = require('../../../services/user.service');
// callbackURL: 'https://api-cloths-production.up.railway.app/api/v1/auth/google/callback',
// origin: 'http://localhost:3000',
// const userService = new UserService();

const googleStrategy = new GoogleStrategy({
    clientID: '679537421470-7r3tb48lg7c7ifsheu5j0v3q3cgpi110.apps.googleusercontent.com',
    clientSecret: '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',
    callbackURL: 'http://localhost:3001/api/v1/auth/google/callback',
    response_type: "code",
    scope: "profile email",
    passReqToCallback   : true,
},async function(request, accessToken, refreshToken, profile, done) {
    console.log(profile)
    return done(null, profile)
})
//https://api-cloths-production.up.railway.app/api/v1/
// const userFind = await userService.findUserByEmail(profile.email)
// if (userFind !== null) {
//     return done(null, profile)
// }else {
//     // const createUser = {
//     //     fullName: profile.displayName,
//     //     email: profile.email,
//     //     image: profile.photos[0].value
//     // }
//     // await userService.createUser(createUser);
//
//     return done(null, profile)
// }
module.exports = {googleStrategy}