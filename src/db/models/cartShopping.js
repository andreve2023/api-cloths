const {DataTypes, Model} = require('sequelize');

const cartShoppingSchema = {
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}

class CartShopping extends Model {
    static associated(models){
        this.belongsTo(models.User, {
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
        })
        this.belongsTo(models.Products, {
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
        })
    }
    static config(sequelize){
        return {
            sequelize,
            timestamps: false
        }
    }
}

module.exports = {
    cartShoppingSchema,
    CartShopping
}