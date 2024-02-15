const User=require("../../models/users");

// This function for ReadUser.

const readUser=async(req,res)=>{
   try {
      
      let {id}=req.body
      
      const info = await User.where({id }).fetch({require: false});

      if (!info) {
         return res.status(404).json({ error: 'User not found' });
      }
      res.status(200).json({message:"User data...!",info});

   } catch (error) {
      res.status(500).json({ error: 'An error occurred' });
      
   }
}

module.exports=readUser