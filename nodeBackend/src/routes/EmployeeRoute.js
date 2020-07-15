const express = require('express');
const router = express.Router();

const EmployeeController = require('../controllers/EmployeeController');

router.get('/list', EmployeeController.list);

// router.get('/datatest', EmployeeController.testdata);
// router.get('/test', EmployeeController.test);
// router.get('/save', (req, res) => {
//     res.json({status:"Employee saved"});
// })

module.exports = router;