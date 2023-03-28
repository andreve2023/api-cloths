const {app} = require('./src/App');
const {config} = require('./src/config/config');
const sequelize = require('./src/libs/conexion');

sequelize.sync({ force: false }).then(async () => {
    app.listen(config.portServer, async () => {
        console.log(`listening on ${config.portServer}`);
    });
});

