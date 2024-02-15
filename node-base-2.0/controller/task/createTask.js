const Task=require("../../models/task");
const User=require("../../models/users")

// This function for CreateTask.
const createTask=async (req,res)=>{
   try {
      let body=req.body
      //need to assign this task to some user
      const user_id=req.body.user_id

      console.log(">>>>>>>>>>>>>>>>>>");

      const chek = await User.where({id: user_id }).fetch({require: false});
      if(!chek){
       return  res.status(404).json({Error:"user is not found"});
      }

      const info =await new Task().save(body);

      const result = await Task.where({id: info.toJSON().id }).fetch({require: false, withRelated:['user']} );



     return  res.status(200).json({message:"Create is successfull...!",result});
      console.log("Create is successfull...!");

   } catch (error) {

      console.log(error);
      res.status(500).json({ error: 'An error occurred' });
   }
}

module.exports= createTask