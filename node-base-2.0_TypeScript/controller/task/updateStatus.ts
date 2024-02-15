// import { Request, Response } from 'express';
import Task from '../../models/task';

// This function for updateStatus.
const updateStatus = async (req:any, res:any) => {
  try {
    const { id, status }: { id: string; status: string } = req.body;
    // Update the task's status
    const info = await Task.where({ id }).save({ status }, { method: 'update' });
    return res.status(200).json({ message: 'Status is updated successfully...!', info });
  } catch (error) {
    console.error('Error updating task status:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

export default updateStatus;







// const Task=require("../../models/task");

// // This function for updateStatus.
// const updateStatus=async (req,res)=>{
//    try {
//       const  id  = req.body;
//       const status  = req.body;
//       // Update the task's status
//       const info= await  Task.where({ id }).save({ status }, {method: 'update'});
//       return res.status(200).json({message:"Status is updated successfully...!",info});
      
//    } catch (error) {
//       console.error('Error updating task status:', error);
//       return res.status(500).json({ error: 'Internal Server Error' });
      
//    }
// }

// module.exports= updateStatus