const express = require('express');

const router = express.Router();
const joiMiddleware = require('../../middlewares/joi.middleware');
const joiSchemas = require('../../utils/joi.schemas');
const {constants} = require('../../config')
// This is my all controller file here.
// const controller =require("../../controller/user_1")

const createTaskRouter=require("../../controller/task/createTask")
const getTaskRouter=require("../../controller/task/readTask")
const updateTaskRouter=require("../../controller/task/updateStatus")
const deleteTaskRouter=require("../../controller/task/deleteTask")

const justChekMydata=require("../../controller/categ/avilable_or_not")
const baseComponent = require('../../components/v1/config/base');

router.get('/',baseComponent);



// This is my routers.
router.post("/create",createTaskRouter);

router.get("/read/:id",getTaskRouter);

router.put("/update/:id",updateTaskRouter);

router.delete("/delete/:id",deleteTaskRouter);


router.post("/justChek",justChekMydata);

module.exports = router;
