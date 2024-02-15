const express= require("express")

const  { createData, readData, updateData, deleteData  } =require( "../controller/controller.js")
const UserRouter=express.Router();

//* Routers...!

UserRouter.post("/",createData);
UserRouter.get("/:id", readData)
UserRouter.put("/:id",updateData)
UserRouter.delete("/:id", deleteData)


module.exports=UserRouter
