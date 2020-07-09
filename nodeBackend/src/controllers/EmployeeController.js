const controllers = {}

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