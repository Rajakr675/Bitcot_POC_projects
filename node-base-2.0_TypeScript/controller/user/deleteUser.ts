// import { Request, Response } from 'express';
import User from '../../models/users';

// This function for DeleteTask.
const DeleteUser = async (req:any, res:any): Promise<void> => {
  try {
    
    const id:any = req.body;
    // Delete the User
    const info = await User.where({ id }).destroy({ require: false }) as any

    res.status(200).json({ message: 'Deleted successfully...!' });
    console.log('Deleted successfully...!');
  } catch (error) {
    console.error('Error deleting task:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export default DeleteUser;











// const User=require("../../models/users");


// // This function for DeleteTask.
// const DeleteUser=async (req,res)=>{
//    try {
//       const {id}  = req.body;
//       // Delete the User
//       const info=await User.where({ id: id }).destroy({require: false});
//       res.status(200).json({message:" Deleted successfully...!"});
//       console.log("Deleted successfull...!");

//    } catch (error) {
//       console.error('Error deleting task:', error);
//       res.status(500).json({ error: 'Internal Server Error' });
      
//    }
// }

// module.exports= DeleteUser