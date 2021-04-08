import 'dotenv/config'

import * as express from 'express'

import { GraphQLObjectType, GraphQLSchema, GraphQLString } from 'graphql'

import { graphqlHTTP } from 'express-graphql'

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'QueryType',
    fields: {
      hello: {
        type: GraphQLString,
        resolve: () => 'world',
      },
    },
  }),
})

const app = express()

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
)

app.listen(process.env.PORT, () => {
  console.log(`Now browse to localhost:${process.env.PORT}/graphql`)
})
