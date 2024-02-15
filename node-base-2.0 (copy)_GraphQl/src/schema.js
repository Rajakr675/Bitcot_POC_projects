const schemaType=require("./type/type")
const resolversUser = require('../src/resolvers/resolversUser');
const resolversTask = require('../src/resolvers/resolversTask');

const Executable=require( "@graphql-tools/schema");
const applyMiddleware= require( "graphql-middleware");

const schema = Executable.makeExecutableSchema({
  resolvers: [resolversUser,resolversTask],
  typeDefs: [schemaType],
});

const schemaWithMiddleware = applyMiddleware.applyMiddleware(schema);





module.exports=schemaWithMiddleware