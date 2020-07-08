import { GraphQLServer } from 'graphql-yoga';
import db from './db';
import Comment from './resolvers/Comment';
import Mutation from './resolvers/Mutation';
import Post from './resolvers/Post';
import Query from './resolvers/Query';
import User from './resolvers/User';

/**
 * type definition
 * 
 * application schema. Operation to be performed through api and data types.
 * 
 * scaler -> String, Int, Boolean, Float, ID
 * 
 * */
const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers: {
        Query,
        User,
        Post,
        Mutation,
        Comment
    },
    context: {
        db
    }
});

server.start(() => {
    console.log('server is up and running');
});