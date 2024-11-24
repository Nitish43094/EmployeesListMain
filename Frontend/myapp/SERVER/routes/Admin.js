const express = require('express')
const router = express.Router();

const {
    isAdminsignup,
    login,
} = require('../controllers/Auth')

router.post('/create-admin-account',isAdminsignup);
router.post('/login',login)

module.exports = router;