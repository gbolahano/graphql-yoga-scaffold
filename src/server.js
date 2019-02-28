import { GraphQLServer } from 'graphql-yoga'

const resolvers = {
  Query: {
    hello: (_, args, ctx, info) => {
      return "Hello World"
    }
  }
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers
})

server.start(() => console.log('Server is running on localhost:4000'))
