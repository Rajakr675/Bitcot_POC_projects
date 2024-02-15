const Task=require("../../models/task");

// This function for DeleteTask.
const DeleteTask=async (req,res)=>{
   try {
      const {id}  = req.body;
      // Delete the task
      const info=await Task.where({ id: id }).destroy({require: false});
      res.status(200).json({message:"Task is Deleted successfully...!"});
      console.log("Deleted is successfull...!");

   } catch (error) {
      console.error('Error deleting task:', error);
      res.status(500).json({ error: 'Internal Server Error' });
      
   }
}

module.exports= DeleteTask