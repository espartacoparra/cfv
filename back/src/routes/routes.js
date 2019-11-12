const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const ProductController = require('../controllers/ProductController');
const CategoryController = require('../controllers/CategoryController');

router.get("/index", UserController.index);
router.post("/create", UserController.create);


//crud products--------------------------------------

router.get('/products', ProductController.index);
router.post('/products/create', ProductController.create);
router.post('/products/delete', ProductController.delete);


//crud products End--------------------------------------

//crud category--------------------------------------

router.get('/category', CategoryController.index);
//router.post('/products/create', ProductController.create);


//crud category End--------------------------------------

module.exports = router;