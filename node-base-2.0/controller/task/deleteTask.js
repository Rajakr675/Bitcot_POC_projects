const Task=require("../../models/task");

// This function for DeleteTask.
const DeleteTask=async (req,res)=>{
   try {
      const id  = req.params.id;
      // Delete the task
      const info=await Task.where({ id: id }).destroy({require: false});
      res.status(200).json({message:"Task is Deleted successfully...!"},info);
      console.log("Deleted is successfull...!");

   } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
      console.error('Error deleting task:', error);
      
   }
}

module.exports= DeleteTask