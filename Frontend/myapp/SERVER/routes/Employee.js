const express = require('express')
const router = express.Router();

const {
    isEmployesignup,
    updateEmployeData,
    deleteEmployeeAccount,
    getAllEmployess
} = require('../controllers/Auth')

router.post("/createAccount",isEmployesignup)
router.put("/update-account",updateEmployeData)
router.get("/getAllEmployeeData",getAllEmployess)
router.delete('/deleteAccount',deleteEmployeeAccount);

module.exports = router;