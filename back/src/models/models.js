const User = require('./user');
const Phone = require('./phone');
const Product = require('./product');
const Image = require('./image');
const Token = require('./token');
const Category = require('./category');
const Order = require('./order');
const Item = require('./item');
const Categories_Products = require('./categories-product');


const Models = {};

Models.User = User;
Models.Phone = Phone;
Models.Product = Product;
Models.Image = Image;
Models.Token = Token;
Models.Category = Category;
Models.Order = Order;
Models.Item = Item;
Models.Categories_Products = Categories_Products;


//user phones
User.hasMany(Phone, { foreignKey: 'user_id' });
Phone.belongsTo(User, { foreignKey: 'user_id' });
//
//users and products
User.hasMany(Product, { foreignKey: 'user_id' });
Product.belongsTo(User, { foreignKey: 'user_id' });
//
//users and tokens
User.hasMany(Token, { foreignKey: 'user_id' });
Token.belongsTo(User, { foreignKey: 'user_id' });
//
//users and orders
User.hasMany(Order, { foreignKey: 'user_id' });
Order.belongsTo(User, { foreignKey: 'user_id' });
//
//products and images
Product.hasMany(Image, { foreignKey: 'product_id' });
Image.belongsTo(Product, { foreignKey: 'product_id' });
//
//products and categories
Product.belongsToMany(Category, { through: 'categories_products', foreignKey: 'product_id' });
Category.belongsToMany(Product, { through: 'categories_products', foreignKey: 'category_id' });



//

//products and categories
Product.hasMany(Item, { foreignKey: 'product_id' });
Item.belongsTo(Product, { foreignKey: 'product_id' });
//
//orders and items
Order.hasMany(Item, { foreignKey: 'order_id' });
Item.belongsTo(Order, { foreignKey: 'order_id' });
//


module.exports = Models;