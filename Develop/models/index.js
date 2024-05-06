// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// Products belongsTo Category
Product.belongsTo(Category, {
  through: {
    model: Product,
    unique: true,
  },
});
// Categories have many Products
Category.belongsToMany(Product, {
  through: {
    model: Category,
    unique: true,
  },
});
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: {
    model: Product,
    unique: true,
  },
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: {
    ProductTag,
    unique: true,
  },
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
