const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const ProductController = require('../controllers/ProductController');
const CategoryController = require('../controllers/CategoryController');
const LoginController = require('../controllers/LoginController');
router.get("/index", UserController.index);
router.post("/create", UserController.create);


//session--------------------------------------


router.post('/sigin', LoginController.sigin);

router.post('/login', LoginController.login);
router.post('/loadsession', LoginController.loadSession);
router.post('/logout', LoginController.logOut);
//router.post('/loguot', LoginController.loguot);




//session End--------------------------------------

//crud products--------------------------------------

router.get('/products', ProductController.index);
router.post('/products/create', ProductController.create);
router.post('/products/update', ProductController.update);
router.post('/products/delete', ProductController.delete);


//crud products End--------------------------------------

//crud category--------------------------------------

router.get('/category', CategoryController.index);
router.post('/category/create', CategoryController.create);
router.post('/category/update', CategoryController.update);
//router.post('/products/create', ProductController.create);


//crud category End--------------------------------------

module.exports = router;