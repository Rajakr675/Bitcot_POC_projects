import express, { Router } from 'express';
// import joiMiddleware from '../../middlewares/joi.middleware';
// import joiSchemas from '../../utils/joi.schemas'
// import constants from '../../config';

import createUserRouter from '../../controller/user/createUser';
import getUserRouter from '../../controller/user/readUser';
import updateUserRouter from '../../controller/user/updateUser';
import deleteUserRouter from '../../controller/user/deleteUser';

import baseComponent from '../../components/v1/config/base';

const router: Router = express.Router();

router.put('/:id', baseComponent);

// This is my routers here.
router.post('/create', createUserRouter);
router.get('/read', getUserRouter);
router.patch('/update/:id', updateUserRouter);
router.delete('/delete', deleteUserRouter);

export default router;



// const express = require('express');
// const router = express.Router();
// const joiMiddleware = require('../../middlewares/joi.middleware');
// const joiSchemas = require('../../utils/joi.schemas');
// const constants = require('../../config')

// const createUserRouter=require("../../controller/user/createUser")
// const getUserRouter=require("../../controller/user/readUser")
// const updateUserRouter=require("../../controller/user/updateUser")
// const deleteUserRouter=require("../../controller/user/deleteUser")

// const baseComponent = require('../../components/v1/config/base');

// router.put('/:id',baseComponent);

// // This is my routers here.
// router.post("/create",createUserRouter);


// router.get("/read",getUserRouter);

// router.patch("/update/:id",updateUserRouter);

// router.delete("/delete",deleteUserRouter);


// module.exports = router;
