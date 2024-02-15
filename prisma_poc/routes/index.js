import { Router } from "express";
import {UserRouter} from "./userRoutes.js"

export const appRouter=Router()

appRouter.use("/user",UserRouter)
