const {DataTypes, Model} = require('sequelize');

const addressSchema = {
    street: {
        type:DataTypes.STRING,
        allowNull: false
    },
    number: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    zipCode: {
        type: DataTypes.STRING,
        allowNull: false
    },
    province: {
        type: DataTypes.STRING,
        allowNull: false
    },
    location: {
        type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.STRING,
    }
}

class Address extends Model {
    static associated(models) {
        this.belongsTo(models.User, {
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
    addressSchema,
    Address
}