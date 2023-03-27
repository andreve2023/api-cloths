const {UserService} = require('../../../services/user.service');

const userService = new UserService();

const getUserAll = async(req, res, next) => {
    try {
        const users = await userService.findAllUsers();
        res.status(200).send(users)
    }catch (e) {
        next(e);
    }
}

module.exports = {getUserAll}