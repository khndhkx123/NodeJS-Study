const controllers = {}


var sequelize = require('../model/database');
var Employee = require('../model/Employee');
var Role = require('../model/Role');

sequelize.sync()

controllers.get = async (req, res) => {

    const {id} = req.params;

    const data = await Employee.findAll({
        where: {id: id},
        include: [Role]
    })
    .then(function(data){
        return data;
    })
    .catch(error => {
        return error;
    })

    res.json({success:true,data:data});

}

controllers.list = async(req,res) => {

    const data = await Employee.findAll({
        include: [ Role ]
    })
    .then(function(data){
        return data;
    })
    .catch(error => {
        return error;
    })

    res.json({success : true, data : data});

}

controllers.create = async (req,res) => {

    // Data parameters from post
    const{name, email, address, phone, role} = req.body;

    //Create
    const data = await Employee.create({
        name:name,
        email:email,
        address:address,
        phone:phone,
        roleId:role
    })
    .then(function(data){
        return data;
    })
    .catch(error=>{
        console.log(error)
        return error;
    })

    //return res
    res.status(200).json({
        success:true,
        message:"Return res success.",
        data:data
    })

}

// controllers.testdata = async (req, res) => {

//     const response = await sequelize.sync().then(function(){

//         // Create Role
//         Role.create({
//             role:'Admin'
//         })

//         // Create employee
//         Employee.create({
//             name: 'Kiwon Kim',
//             email: 'khndhkx123@naver.com',
//             address: 'Seoul - Gangseo',
//             phone: '01086267026',
//             roleId: 1
//         });

//         // Get all employee data
//         const data = Employee.findAll();
//         return data;
//     })
//     .catch(error => {
//         return error;
//     });

//     console.log("Execute testdata")
//     res.json({success : true, data : response});
// }

controllers.test = (req, res) => {

    const data = {
        name: "John Smith",
        age: 24,
        city: "Madrid"
    }
    console.log("Execute from controllers employee")
    res.json(data);

};

module.exports = controllers;