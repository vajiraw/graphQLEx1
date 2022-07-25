var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema, GraphQLSchema ,graphql, GraphQLList} = require('graphql');
var { GraphQLObjectType,GraphQLSchema,GraphQLInt,GraphQLString} = require('graphql');
const userData = require('./MOCK_DATA.json')

var app = express()


const UserType = new GraphQLObjectType({
    name: "user",
    fields: () => ({
        id : {type: GraphQLInt},
        first_name : {type: GraphQLString},
        last_name : {type: GraphQLString},
        email : {type: GraphQLString},
        gender : {type: GraphQLString},
        ip_address : {type: GraphQLString}
    })
})

const RootQuery = new GraphQLObjectType({
    name:'QueryType',
    fields:{
        getAllUsers:{
            type : new GraphQLList(UserType),
            args : {id : {type : GraphQLInt}},
            resolve(parent, args){
                return userData
            }
        },        
    }
})
const Mutation = new graphql.GraphQLObjectType({
    name:'RootMutator',
    fields: () => {}
})

const schema = new GraphQLSchema({query:RootQuery})  //,mutation:MutationRoot

app.use('/graphql',graphqlHTTP({
    schema: schema,
    graphiql: true,
}))

app.listen(3000,()=>{
    console.log('here we go now @3000 ');
})

