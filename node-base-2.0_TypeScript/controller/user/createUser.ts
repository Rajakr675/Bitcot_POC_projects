// import { Request, Response } from 'express';
import User from '../../models/users'; // Assuming the User model has been defined with the appropriate interface

const createUser = async (req:any, res:any): Promise<void> => {
  try {
    const body = req.body; // Assuming IUser is the interface for the user object
    const info = await new User(body).save();
    res.status(200).json({ message: "Create is successful...!", info });
    console.log("Create is successful...!");
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
};

export default createUser;








// const User=require("../../models/users");

// const createUser=async (req,res)=>{
//    try {
//       const body=req.body
//       const info =await new User().save(body);
//       res.status(200).json({message:"Create is successfull...!",info});
//       console.log("Create is successfull...!");

//    } catch (error) {
//       res.status(500).json({ error: 'An error occurred' });
//    }
// }

// module.exports=createUser