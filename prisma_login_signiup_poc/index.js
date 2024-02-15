const express =  require("express");
const dotenv   = require("dotenv");

const { PrismaClient } = require("@prisma/client");
dotenv.config()
 
global.prisma = new PrismaClient()

const router = require("./routes/user");

console.log(process.env.NODE_ENV);
console.log(process.env.PORT);
const port = process.env.PORT || 3001
const app = express();

app.use(express.json());
app.use("/auth" ,router)

app.listen(port, () =>{
    console.log(`server is running at port http://localhost:${port}`);
})