const {DataTypes, Model} = require('sequelize');

const productSchema = {
    name_product: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    size: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        defaultValue: ["S", "M", "L", "XL"]
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    freeShopping: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    discount: {
        type: DataTypes.INTEGER,
    }
}

class Products extends Model {
    static associated(models) {
        this.belongsTo(models.Category, {
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
        })
        this.hasMany(models.CartShopping, {
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
    productSchema,
    Products
}