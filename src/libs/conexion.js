const {Sequelize} = require('sequelize');
const {config} = require('../config/config');
const {setupModels} = require('../db/index');
const password = decodeURIComponent(config.passwordDb);
const user = encodeURIComponent(config.userDb);

const URL_DB = `postgresql://${user}:${password}@${config.localHost}:${config.portDb}/${config.nameDb}`;

const sequelize = new Sequelize(URL_DB, {
    dialect: 'postgres',
    logging: false
})

setupModels(sequelize)

module.exports = sequelize;