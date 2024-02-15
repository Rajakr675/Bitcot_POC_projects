const express = require('express');
const router = express.Router();
const userController = require('../controllers/user_controller');

router.post('/user', userController.createUser);
router.get('/read', userController.getUsers);
router.put('/update/:id', userController.updateUser);
router.delete('/delete/:id', userController.deleteUser);

module.exports = router;