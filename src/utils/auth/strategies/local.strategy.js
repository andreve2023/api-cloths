const { Strategy } = require('passport-local');
const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');
const {UserService} = require('../../../services/user.service');

const userService = new UserService();

const localStrategy = new Strategy({
        usernameField: 'email',
        passwordField: 'password'
    },
    async (email, password, done) => {
    try {
        const user = await userService.findUserByEmail(email);
        if (!user){
            done(boom.unauthorized(), false)
        }
        const itMatch = await bcrypt.compare(password, user.password);
        if (!itMatch){
            done(boom.unauthorized(), false)
        }
        delete user.dataValues.password
        done(null, user)
    }catch (e) {
        done(e)
    }
});

module.exports = {localStrategy}