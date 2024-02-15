const Task=require("../../models/task");

// This function for updateStatus.
const updateStatus=async (req,res)=>{
   try {
      const  id  = req.params.id;
      const status  = req.params.status;
      // Update the task's status
      const info= await  Task.where({ id }).save({ status }, {method: 'update'});
      return res.status(200).json({message:"Status is updated successfully...!",info});
      
   } catch (error) {
      console.error('Error updating task status:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
      
   }
}

module.exports= updateStatus