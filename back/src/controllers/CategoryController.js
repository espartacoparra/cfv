const Models = require('../models/models');
class CategoryController {
    async index(req, res) {
        const categories = await Models.Category.findAll();
        res.json(categories);

    }
    async create(req, res) {
        var date = req.body;
        try {
            const Category = Models.Category.create(date);
            res.json('ok');
        } catch (error) {
            res.json(error);
        }
    }
    async update(req, res) {
        var data = req.body;
        console.log(data);
        try {
            const Category = Models.Category.update(data, { where: { id: data.id } });
            res.json('ok');
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

module.exports = new CategoryController();