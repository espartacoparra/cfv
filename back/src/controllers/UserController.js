
const Models = require('../models/models');
class UserController {
   async index(req,res){
        
        const users = await Models.User.findAll({ include: [{ model: Models.Phone },{ model: Models.Product,include:[{all:true}] },{ model: Models.Token }]});
       // const phones = await Models.Phone.findAll({ include: [{ all: true }]});
        //const Products = await Models.Product.findAll({ include: [{ all: true }]});

        console.log(users);
        res.send(users);
    }
    async create(req,res){
        
        var user1={name:"Valentina",lastname:"Pedrique",cedula:"26350710",type:"user",email:"valentinaPedrique@gmail.com",password:"123456"};
        var user2={name:"Valentina",lastname:"Pedrique",cedula:"26350710",type:"user",email:"valentinaPedrique@gmail.com",password:"123456"};
        const users = await Models.User.bulkCreate([user1,user2]);
        res.send(users);
    }
    async update(req,res){
        User.findAll().then(users => {
            console.log("All users:", JSON.stringify(users, null, 4));
          });
        const users = await User.findAll();
        res.send(users);
    }
    async delete(req,res){
        User.findAll().then(users => {
            console.log("All users:", JSON.stringify(users, null, 4));
          });
        const users = await User.findAll();
        res.send(users);
    }
}

module.exports= new UserController();