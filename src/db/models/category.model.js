const {DataTypes, Model} = require('sequelize');

const categorySchema = {
    name_category: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image_category: {
        type: DataTypes.STRING
    }
}

class Category extends Model {
    static associated(models) {
        this.hasMany(models.Products, {
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
    categorySchema,
    Category
}