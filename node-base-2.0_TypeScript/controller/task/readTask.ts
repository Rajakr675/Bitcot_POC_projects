import Task from "../../models/task";
// import { Request, Response } from "express";

// This function is for ReadTask.

const readTask = async (req:any, res:any) => {
  try {
    const { id } = req.body;

    const info = await Task.where({ id }).fetch({ require: false });

    if (!info) {
      return res.status(404).json({ error: 'Task not found' });
    }
    
    res.status(200).json({ message: "Your Task...!", info });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
}

export default readTask;





// const Task=require("../../models/task");

// // This function for ReadTask.

// const readTask=async(req,res)=>{
//    try {
      
//       let id=req.body
      
//       const info = await Task.where({id }).fetch({require: false});
      

//       if (!info) {
//          return res.status(404).json({ error: 'Task not found' });
//       }
//       res.status(200).json({message:"Your Task...!",info});

//    } catch (error) {
//       res.status(500).json({ error: 'An error occurred' });
      
//    }
// }

// module.exports=readTask