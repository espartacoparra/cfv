
const Models = require('../models/models');
const fs = require('fs');
const enviroment = require('../config/enviroment');
const imgPath = './public/images/';
class ProductController {

    async index(req, res) {

        try {
            const products = await Models.Product.findAll({ include: [{ model: Models.Category }, { model: Models.Image }] });
            res.json(products);
        } catch (error) {
            res.json()
        }

    }

    async getOne(req, res) {
        var id = req.params.id;
        try {
            const products = await Models.Product.findOne({ where: { id: id }, include: [{ model: Models.Category }, { model: Models.Color }, { model: Models.Size }, { model: Models.Category }] });
            res.json(products);
        } catch (error) {
            res.json()
        }

    }

    async create(req, res) {
        var data = req.body;
        try {
            const Product = await Models.Product.create({ user_id: data.user_id, name: data.name, price: data.price, description: data.description, quantity: data.quantity });
            data.product_id = Product.id;
            var cat = data.categories.map(cat => {
                return { category_id: cat, product_id: Product.id };
            });
            var sizes = data.size.map(data => {
                return { product_id: Product.id, size_id: data };
            });
            var images = await createImage(data);
            const result = Promise.all(
                [Models.Categories_Products.bulkCreate(cat),
                Models.Color.create({ product_id: Product.id, color1: data.color1, color2: data.color2, color3: data.color3 }),
                Models.Products_Size.bulkCreate(sizes),
                Models.Image.bulkCreate(images)]);
            //const Category = await Models.Categories_Products.bulkCreate(cat);
            //const Color = await Models.Color.create({ product_id: Product.id, color1: data.color1, color2: data.color2, color3: data.color3 })
            //const Size = await Models.Products_Size.bulkCreate(sizes);
            //const Image = await Models.Image.bulkCreate(images);
            res.json("ok");
        } catch (error) {
            res.json(error);
        }
    }
    async update(req, res) {
        var data = req.body;
        // res.json(data);
        try {
            const ciclo1 = Promise.all([
                Models.Product.update(data, { where: { id: data.id } }),
                Models.Categories_Products.destroy({ where: { product_id: data.id } }),
                Models.Products_Size.destroy({ where: { product_id: data.id } }),
                Models.Color.update(data.colors, { where: { id: data.colors.id } })
            ]);
            //const Product = await Models.Product.update(data, { where: { id: data.id } });
            //const catDelete = await Models.Categories_Products.destroy({ where: { product_id: data.id } });
            //const catDelete = await Models.Products_Size.destroy({ where: { product_id: data.id } });
            //const colorUpdate = await Models.Color.update(data.colors, { where: { id: data.colors.id } });
            var cat = data.categories.map(cat => { return { category_id: cat, product_id: data.id }; });
            var siz = data.size.map(siz => { return { size_id: siz, product_id: data.id }; });
            const ciclo2 = Promise.all([
                Models.Categories_Products.bulkCreate(cat),
                Models.Products_Size.bulkCreate(siz)
            ]);
            //const Category = await Models.Categories_Products.bulkCreate(cat);
            //const Category = await Models.Products_Size.bulkCreate(siz);
            res.json(ciclo1);
        } catch (error) {
            res.json(error);
        }
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

    //methods front
    async populars(req, res) {

        try {
            const products = await Models.Product.findAll({ include: [{ model: Models.Category }, { model: Models.Image }] });
            res.json(products);
        } catch (error) {
            res.json()
        }

    }

}



//funciones no enrrutadas
async function createImage(data) {
    var images = data.image.map(image => {
        var date = new Date();
        var name = date + Math.random().toString(36).substring(7) + '.png';
        var target_path = imgPath + name;
        var buff = Buffer.from(image, 'base64');
        fs.writeFile(target_path, buff, (err) => {
            if (err) throw err;
            console.log('The binary data has been decoded and saved to my-file.png');
        });
        return { product_id: data.product_id, name: name, url: enviroment.images_path + name };
    });
    return images;
}

module.exports = new ProductController();