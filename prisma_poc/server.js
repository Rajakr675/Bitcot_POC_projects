import "dotenv/config";

import express from"express"
const app=express()
const port=process.env.Port ||3000

//middleware
app.use(express.json());

app.get("/",(req, res)=>{
    return res.send("hello world")
})


//*  Routes file
import {appRouter} from "./routes/index.js";
app.use("/api/v1",appRouter);

app.listen(port,()=>{
    console.log(`server is runing http://localhost:${port}`);
})