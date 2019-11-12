
const Models = require('../models/models');
const fs = require('fs');
class ProductController {

    async index(req, res) {

        const products = await Models.Product.findAll({ include: [{ model: Models.Category }, { model: Models.Image }] });
        res.json(products);

    }
    async create(req, res) {
        console.time();
        var data = req.body;
        const Product = await Models.Product.create({ user_id: 1, name: data.name, price: data.price, quantity: data.quantity });
        var cat = data.categories.map(cat => {
            return { category_id: cat, product_id: Product.id };
        });
        const Category = await Models.Categories_Products.bulkCreate(cat);
        console.log(data.image.length);
        var images = data.image.map(image => {
            var date = new Date();
            var name = date + Math.random().toString(36).substring(7) + '.png';
            var target_path = './public/images/' + name;
            var buff = Buffer.from(image, 'base64');
            fs.writeFile(target_path, buff, (err) => {
                if (err) throw err;
                console.log('The binary data has been decoded and saved to my-file.png');
            });
            return { product_id: Product.id, name: name, url: name };
        });
        const Image = await Models.Image.bulkCreate(images);
        res.json("ok");
        console.timeEnd();
    }
    async update(req, res) {
        User.findAll().then(users => {
            console.log("All users:", JSON.stringify(users, null, 4));
        });
        const users = await User.findAll();
        res.send(users);
    }
    async delete(req, res) {
        var data = req.body;
        try {
            const product = await Models.Product.destroy({ where: { id: data.id } });
            data.images.map(image => {
                var target_path = './public/images/' + image.name;
                fs.unlink(target_path, (err) => {
                    if (err) throw err;
                    console.log('image was deleted');
                });
            });

            res.json(product);
        } catch (error) {
            res.json(error);
        }

    }
}

module.exports = new ProductController();