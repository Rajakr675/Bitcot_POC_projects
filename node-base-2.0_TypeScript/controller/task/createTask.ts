import Task from "../../models/task";
import User from "../../models/users";
// import { Request, Response } from "express";

// This function is for creating a task.
const createTask = async (req:any, res:any) => {
  try {
    const body = req.body;
    // Need to assign this task to some user.
    const user_id = req.body.user_id;

    const check = await User.where({ id: user_id }).fetch({ require: false });
    if (!check) {
      return res.status(404).json({ Error: "User is not found" });
    }

    const info = await new Task().save(body);

    const result = await Task.where({ id: info.toJSON().id }).fetch({
      require: false,
      withRelated: ["user"],
    });

    console.log("Create is successful...!");
    return res.status(200).json({ message: "Create is successful...!", result });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "An error occurred" });
  }
};

export default createTask;






// const Task=require("../../models/task");
// const User=require("../../models/users")

// // This function for CreateTask.
// const createTask=async (req,res)=>{
//    try {
//       let body=req.body
//       //need to assign this task to some user
//       const user_id=req.body.user_id

//       const chek = await User.where({id: user_id }).fetch({require: false});
//       if(!chek){
//        return  res.status(404).json({Error:"user is not found"});
//       }

//       const info =await new Task().save(body);

//       const result = await Task.where({id: info.toJSON().id }).fetch({require: false, withRelated:['user']} );



//      return  res.status(200).json({message:"Create is successfull...!",result});
//       console.log("Create is successfull...!");

//    } catch (error) {

//       console.log(error);
//       res.status(500).json({ error: 'An error occurred' });
//    }
// }

// module.exports= createTask