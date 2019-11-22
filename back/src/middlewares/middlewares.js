const Models = require('../models/models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
class Middlewares {
    async apitoken(req, res, next) {
        var tk = "" + req.headers.api_token;
        var uid = "" + req.headers.user_id;
        console.log('paso por el midelware' + tk);
        console.log('paso por el midelware' + uid);
        if (tk != "") {
            try {
                const validateToken = await Models.Token.findOne({ where: { [Op.and]: [{ user_id: uid }, { token: tk }] } });
                //console.log(validateToken);
                if (validateToken != null) {
                    next();
                } else {
                    console.log('el else');
                    next();
                }
            } catch (error) {
                console.log(error);
            }
        } else {
            // res.json(1);
        }
        /*if (tk != null) {
            try {
                const validateToken = await Models.Token.findOne({ where: { token: tk } });
                if (validateUser == null) {
                    res.json(1);
                } else {
                    next();
                }
            } catch (error) {
                res.json(error);
            }
        } else {
            res.json(1);
        }*/

    }
}


module.exports = new Middlewares();