const {DataTypes, Model} = require('sequelize');

const userSchema = {
    fullName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cellPhone: {
        type: DataTypes.BIGINT,
        allowNull: true
    },
    isAdmin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    image: {
        type: DataTypes.STRING,
        allowNull: true,
    }
}

class User extends Model {
    static associated(models) {
        this.hasMany(models.Address, {
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
        })
    }
    static config(sequelize) {
        return {
            sequelize,
            timestamps: false
        }
    }
}

module.exports = {
    userSchema,
    User
}