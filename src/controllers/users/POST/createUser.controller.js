const {UserService} = require('../../../services/user.service');

const userService = new UserService();
const createNewUser = async (req, res, next) => {
    try {
        const userCreated = await userService.createUser(req.body);
        res.status(200).send(userCreated);
    }catch (e) {
        next(e)
    }
}

module.exports = {createNewUser}