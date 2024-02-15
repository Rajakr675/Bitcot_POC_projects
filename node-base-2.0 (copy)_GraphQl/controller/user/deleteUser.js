const User=require("../../models/users");


// This function for DeleteTask.
const DeleteUser=async (req,res)=>{
   try {
      const {id}  = req.body;
      // Delete the User
      const info=await User.where({ id: id }).destroy({require: false});
      res.status(200).json({message:" Deleted successfully...!"});
      console.log("Deleted successfull...!");

   } catch (error) {
      console.error('Error deleting task:', error);
      res.status(500).json({ error: 'Internal Server Error' });
      
   }
}

module.exports= DeleteUser