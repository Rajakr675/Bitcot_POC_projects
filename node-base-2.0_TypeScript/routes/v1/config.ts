import express, { Request, Response, Router } from 'express';
import { constants } from '../../config';
import * as joiMiddleware from '../../middlewares/joi.middleware';
import * as joiSchemas from '../../utils/joi.schemas';
// This is my all controller file here.
// import * as controller from '../../controller/user_1';

import createTaskRouter from '../../controller/task/createTask';
import getTaskRouter from '../../controller/task/readTask';
import updateTaskRouter from '../../controller/task/updateStatus';
import deleteTaskRouter from '../../controller/task/deleteTask';

import justChekMydata from '../../controller/categ/avilable_or_not';
import baseComponent from '../../components/v1/config/base';

const router: Router = express.Router();

router.get('/', baseComponent);

// This is my routers.
router.post('/create', createTaskRouter);
router.get('/read', getTaskRouter);
router.put('/update', updateTaskRouter);
router.delete('/delete', deleteTaskRouter);

router.post('/justChek', justChekMydata);

export default router;












// const express = require('express');

// const router = express.Router();
// const joiMiddleware = require('../../middlewares/joi.middleware');
// const joiSchemas = require('../../utils/joi.schemas');
// const {constants} = require('../../config')
// // This is my all controller file here.
// // const controller =require("../../controller/user_1")

// const createTaskRouter=require("../../controller/task/createTask")
// const getTaskRouter=require("../../controller/task/readTask")
// const updateTaskRouter=require("../../controller/task/updateStatus")
// const deleteTaskRouter=require("../../controller/task/deleteTask")


// const justChekMydata=require("../../controller/categ/avilable_or_not")
// const baseComponent = require('../../components/v1/config/base');

// router.get('/',baseComponent);



// // This is my routers.
// router.post("/create",createTaskRouter);

// router.get("/read",getTaskRouter);

// router.put("/update",updateTaskRouter);

// router.delete("/delete",deleteTaskRouter);


// router.post("/justChek",justChekMydata);

// module.exports = router;
