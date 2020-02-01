const Models = require('../models/models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
class CartController {
    async index(req, res) {


    }
    async create(req, res) {
        var user = req.headers;
        var data = req.body;
        //return res.json(data);
        var query = { user_id: user.user_id, quantity: data.request.quantity, img: null, status: 'cart' };
        try {
            const Val = await Models.Order.findOne({ where: { user_id: user.user_id }, include: { model: Models.Item } });
            var oder_id = Val.id;
            if (Val == null) {
                const Order = await Models.Order.create(query);
                oder_id = Order.id;
            }
            const Product = await Models.Product.findOne({ where: { id: data.product.id } });
            const Item = await Models.Item.create({ id: "", order_id: oder_id, product_id: data.product.id, quantity: data.request.quantity, price: Product.price });
            return res.json(Item);
        } catch (error) {
            res.json(error);
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
    async delete(req, res) {

    }

    async getSize(req, res) {
        const Size = await Models.Size.findAll();
        res.json(Size);
    }



}

module.exports = new CartController();