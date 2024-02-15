const User=require("../../models/users");

const createUser=async (req,res)=>{
   try {
      const body=req.body
      const info =await new User().save(body);
      res.status(200).json({message:"Create is successfull...!",info});
      console.log("Create is successfull...!");

   } catch (error) {
      res.status(500).json({ error: 'An error occurred' });
   }
}

module.exports=createUser