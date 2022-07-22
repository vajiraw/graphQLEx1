const exppress =  require('express')
const app = exppress()

var { graphql, buildSchema } = require('graphql');

var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

var rootValue = {
    hello: () => {
      return 'Hello world!';
    },
};

graphql({
    schema,
    source: '{ hello }',
    rootValue
  }).then((response) => {
    console.log(response);
  });




const PORT = 3000

app.get('/',)


app.listen(PORT,()=>{
    console.log('server start @port 3000 ');
})