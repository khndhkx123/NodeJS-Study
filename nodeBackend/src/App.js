// import express
const express = require('express');
const app = express();

// setting port
app.set('port', process.env.POST||3000);

// Middlewares
app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

// importing route
const employeeRouters = require('./routes/EmployeeRoute');

//Route
app.use('/employee', employeeRouters);

app.use('/test', (req, res) => {
    res.send("Test route");
});

app.use('/', (req,res) => {
    res.send("Hello World from Node.js Server");
});

app.listen(app.get('port'), () => {
    console.log("Starting Server Node.js");
})