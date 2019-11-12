
const Models = require('../models/models');
class CategoryController {
    async index(req, res) {
        const categories = await Models.Category.findAll();
        res.json(categories);

    }
    async create(req, res) {

    }
    async update(req, res) {

    }
    async delete(req, res) {

    }
}

module.exports = new CategoryController();