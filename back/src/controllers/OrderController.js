const Models = require("../models/models");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
class CartController {
  async index(req, res) { }

  async getCart(req, res) {
    var user = req.headers;
    try {
      const Val = await Models.Order.findOne({
        where: { user_id: user.user_id },
        include: [{ model: Models.Item, include: { model: Models.Product, include: [{ model: Models.Image }, { model: Models.Size }] } }]
      });
      if (Val == null) {
        res.json('empy');
      } else {
        res.json(Val);
      }

    } catch (error) { }

  }

  async create(req, res) {
    var user = req.headers;
    var data = req.body;
    //return res.json(data);
    var query = {
      user_id: user.user_id,
      quantity: data.request.quantity,
      img: null,
      status: "cart"
    };
    try {
      const Val = await Models.Order.findOne({
        where: { user_id: user.user_id },
        include: { model: Models.Item }
      });
      var oder_id = "";
      if (Val == null) {
        const Order = await Models.Order.create(query);
        oder_id = Order.id;
      } else {
        oder_id = Val.id;
      }
      
      const Product = await Models.Product.findOne({
        where: { id: data.product.id }
      });
      var validateSize =Val.items.filter(item=>{
        if (item.product_id == data.product.id && item.size_id == data.request.size) {
          return item;
        }
      });
      
      if (validateSize.length == 0) {
        const Item = await Models.Item.create({
          id: "",
          order_id: oder_id,
          product_id: data.product.id,
          quantity: data.request.quantity,
          size_id: data.request.size,
          price: Product.price
        });
        return res.json('01');
      }
      return res.json('02');
     

    } catch (error) {
      res.json("error");
    }
  }

  async update(req, res) {
    var data = req.body;
    console.log(data);
    try {
    } catch (error) {
      res.json(error);
    }
  }
  async delete(req, res) { }

  async getSize(req, res) {
    const Size = await Models.Size.findAll();
    res.json(Size);
  }
}

module.exports = new CartController();
