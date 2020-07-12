const controllers = {}


var sequelize = require('../model/database');
var Employee = require('../model/Employee');
var Role = require('../model/Role');

controllers.testdata = async (req, res) => {

    const response = await sequelize.sync().then(function(){

        // Create Role
        Role.create({
            role:'Admin'
        })

        // Create employee
        Employee.create({
            name: 'Kiwon Kim',
            email: 'khndhkx123@naver.com',
            address: 'Seoul - Gangseo',
            phone: '01086267026',
            roleId: 1
        });
        
        // Get all employee data
        const data = Employee.findAll();
        return data;
    })
    .catch(error => {
        return error;
    });

    console.log("Execute testdata")
    res.json({success : true, data : response});
}

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