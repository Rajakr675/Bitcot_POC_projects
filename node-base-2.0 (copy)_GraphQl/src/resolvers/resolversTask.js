// resolvers/task.js
const Task = require('../../models/task');

const taskResolvers = {
  Query:{

    getTask: async ( parents,args ) => {
     try {
      //  console.log(args);
       const id=args.id
       const info= await Task.where('id', id).fetch();
      //  console.log(id);
      //  console.log(info);
       return info.toJSON()
     } catch (error) {
       throw new Error('Task not found.');
     }
   },
 
   getAllTasks: async () => {
    const users = await Task.fetchAll();
    return users.toJSON();
   },
  },
  Mutation:{

    createTask: async (parent,args) => {
      const { status,task_name,userId,description } = args;
      const info=await new Task({ status,task_name,userId,description}).save();
      return {
        status: Task.status,
        task_name: Task.task_name,
        userId: Task.userId,
        description:Task.description
      };
    },
  
    updateTask: async ({ id, userId, task_name, description, status }) => {
      try {
        const task = await Task.where('id', id).fetch();
        if (!task) {
          throw new Error('Task not found.');
        }
        return await task.save({ userId, task_name, description, status });
      } catch (error) {
        throw new Error('Failed to update task.');
      }
    },
  
    deleteTask: async ({ id }) => {
      try {
        const task = await Task.where('id', id).fetch();
        if (!task) {
          throw new Error('Task not found.');
        }
        await task.destroy();
        return task;
      } catch (error) {
        throw new Error('Failed to delete task.');
      }
    },
  }
}

module.exports = taskResolvers;
