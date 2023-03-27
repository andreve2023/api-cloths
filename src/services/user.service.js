const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');
const {models} = require('../libs/conexion');

class UserService {
    async findAllUsers() {
        return await models.User.findAll();
    }
    async findUserByEmail(email) {
        return await models.User.findOne({
            where: {email: email}
        })
    }
    async createUser(body) {
        const {email, password} = body;
        const hashPass = await bcrypt.hash(password, 10)
        const userFind = await this.findUserByEmail(email);
        if (userFind) {
            throw new boom.conflict("El usuario ya se encuentra registrado");
        }else {
            const newUser = models.User.create({
                ...body,
                password: hashPass
            })
            delete (await newUser).dataValues.password
            return newUser
        }
    }
}
module.exports = {UserService}
