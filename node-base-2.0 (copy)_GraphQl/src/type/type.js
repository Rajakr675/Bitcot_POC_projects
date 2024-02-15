 const schemaType = (`

type User {
    id: Int!
    name: String
    email: String
    password: String
  }
  
  type Task {
    id: Int!
    userId: Int!
    task_name: String
    description: String
    status: String!
  }  
  type Query {
   getUser(id: Int!): User
   getAllUsers: [User]
   getTask(id: Int!): Task
   getAllTasks: [Task]
  }  
  type Mutation {
   createUser(name: String!, email: String!, password: String!): User
   createTask(userId: Int!, task_name: String!, description: String, status: String!): Task
   updateUser(id: Int!, name: String, email: String, password: String): User
   updateTask(id: Int!, userId: Int, task_name: String, description: String, status: String): Task
   deleteUser(id: Int!): User
   deleteTask(id: Int!): Task
 }
  
  

  `);

  module.exports=schemaType



