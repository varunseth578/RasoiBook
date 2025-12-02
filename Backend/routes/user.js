const express = require('express');
const { userRegister: registerUser, userLogin: loginUser, getUser } = require('../controller/user');

const router = express.Router();
router.post('/register', registerUser);
router.post('/login', loginUser);     
router.get('/user/:id',getUser);
module.exports = router;