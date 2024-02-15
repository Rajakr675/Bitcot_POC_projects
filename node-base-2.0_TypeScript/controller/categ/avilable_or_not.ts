// import { Request, Response } from 'express';
import Category from '../../models/category';
import Task from '../../models/task';
import User from '../../models/users';

const check = async (req: any, res: any): Promise<void> => {
  try {
    const { user_id, task_id } = req.params;
    const { body } = req;

    const info = await Task.where({ user_id }).fetch({ require: false });

    if (!info) {
      res.status(404).json({ error: 'This userId is not assigned a task' });

      const info2 = await User.where({ id: user_id }).fetch({ require: false });
      if (!info2) {
        res.send({ error: "This id is not present in the user table." });
      }
      res.send({ message: "This id is available in the user table" });
    }

    const insert = await new Category().save(body);
    res.send({ message: "Data is successfully inserted!", insert });
    res.send({ message: "This userId's task is assigned!" });

  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
    console.log(error);
  }
};

export default check;





// const category=require("../../models/category");
// const Task=require("../../models/task");
// const User=require("../../models/users")


// const chek=async(req,res)=>{
//    try {
      
//       let user_id=req.params.user_id          // get a userId in task table for chek task assign or not.
//       let task_id=req.params.task_id
//       let body=req.body
      
//       const info = await Task.where({user_id }).fetch({require: false});

//       if (!info) {
//          res.status(404).json({ error: 'This userId is not assign task' });

//          const info2 = await User.where({id: user_id }).fetch({require: false});
//          if (!info2){
//             res.send({error:"This id  is not there in user table."})
//          }
//          res.send({message:"This id is avlaible in user table"})

//       }
//       const insert =await new category().save(body);
//       res.send({message:"Data is inserted is successfully...!",insert})
//       res.send({message:"This userId  task is assigned...!"})
      

//    } catch (error) {
//       res.status(500).json({ error: 'An error occurred' });
//       console.log(error);
      
//    }
// }
// module.exports=chek