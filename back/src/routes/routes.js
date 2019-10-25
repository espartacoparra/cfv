const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController'); 

router.get("/index",UserController.index);
router.get("/create",UserController.create);


module.exports = router;