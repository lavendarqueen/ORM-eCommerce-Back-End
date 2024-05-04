const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");
const Product = require("./Product.js");
const ProductTag = require("./ProductTag.js");
const Tag = require("./Tag.js");

class Category extends Model {}

Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoincrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Category: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    ProductTag: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    Tag: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "category",
  }
);

module.exports = Category;
