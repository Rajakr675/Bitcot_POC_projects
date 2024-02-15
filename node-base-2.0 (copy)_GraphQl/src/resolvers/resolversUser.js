// resolvers/user.js

const User = require('../../models/users');

const userResolvers = {
  // Query:{
  //   hello: () => {
  //     return "Hello world!"
  //   },
  // }
  Query:{

    getUser: async (parents,args ) => {
       
       try {
             // return await User.where('id', id).fetch();
        const id=args.id
        const info=await User.where('id', id).fetch({ require: true });
        return info.toJSON()
       } catch (error) {
          throw new Error('User not found.');
       }
    },
    
   getAllUsers: async () => {
    const users = await User.fetchAll();
    return users.toJSON();
   },
   
  },
  Mutation:{
    createUser: async (parent,args) => {
      const { name, email, password } = args;
      const info=await new User({ name, email, password }).save();
      return {
        id: User.id,
        name: User.name,
        email: User.email,
      };
    },
  
    updateUser: async ({ id, name, email, password }) => {
      try {
        const user = await User.where('id', id).fetch();
        if (!user) {
          throw new Error('User not found.');
        }
        return await user.save({ name, email, password });
      } catch (error) {
        throw new Error('Failed to update user.');
      }
    },
  
    deleteUser: async (parent, args) => {
      try {
        const { id } = args;
        const user = await User.findByPk(id);

        if (!user) {
          throw new Error('User not found.');
        }

        await user.destroy();
        return {
          id: user.id,
        };
      } catch (error) {
        throw new Error('Failed to delete user.');
      }
    
    },

  }
  
  }


module.exports = userResolvers;
