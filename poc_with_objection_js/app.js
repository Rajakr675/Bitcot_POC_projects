const express=require("express");
const app=express();
const port=3000
const userRoutes = require('./routes/user_routes');
const bookRoutes = require('./routes/books_routes');


app.use(express.json());
app.use('/user', userRoutes);
app.use('/book', bookRoutes);

app.listen(port,()=>{
    console.log(`My server is runing http://localhost:${port}`);
})