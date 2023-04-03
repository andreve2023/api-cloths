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
    async findUserById(userId) {
        const userFind = await models.User.findByPk(userId);
        if (!userId) throw new boom.notFound('Usuario no encontrado');
        else return userFind
    }
    async createUser(body) {
        let hashPass = ''
        const {email, password} = body;
        if (password){
            hashPass = await bcrypt.hash(password, 10)
        }
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
