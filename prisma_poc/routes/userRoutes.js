import {Router} from "express";
import { createUser,fechdata,UpdateUser,deleteUser,LoginUser } from "../controller/User.js";
import { verfyToken } from "../jwt_auth/jwt.js";

export const UserRouter=Router();

//* Routers...!

UserRouter.post("/",createUser);
UserRouter.get("/", fechdata)
UserRouter.put("/:id",UpdateUser)
UserRouter.delete("/:id",verfyToken, deleteUser)
UserRouter.get("/login",LoginUser)






