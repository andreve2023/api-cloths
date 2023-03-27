const jwt = require('jsonwebtoken');
const {config} = require('../../config/config');
const authLogin = (req, res, next) => {
    try {
        const user = req.user
        const payload = {
            sub: user.id,
            email: user.email,
            isAdmin: user.isAdmin
        }
        const token = jwt.sign(payload, config.jwtSecret)
        res.json({
            user,
            token
        })
    }catch (e) {
        next(e)
    }
}
module.exports = {authLogin}