import { GraphQLServer } from 'graphql-yoga';

const users = [{
    id: '1',
    name: 'soumya',
    email: 'soumya392@gmail.com',
    age: 25
},
{
    id: '2',
    name: 'usha',
    email: 'usha@gamil.com',
    age: 25
},
{
    id: '3',
    name: 'puja',
    email: 'puka@gamil.com',
    age: 25
},
{
    id: '4',
    name: 'papa',
    email: 'papa@gmail.com',
    age: 25
}];

const posts = [{
    id: '10',
    text: 'Post 1',
    body: 'Post 1 Body',
    published: true,
    author: "1"
},
{
    id: '11',
    text: 'Post 2',
    body: 'Post 2 Body',
    published: true,
    author: "2"
},
{
    id: '12',
    text: 'Post 3',
    body: 'Post 3 Body',
    published: true,
    author: "2"
}];

const comments = [{
    id: '1',
    text: 'comment one',
    author: '1',
    post: '10'
}, {
    id: '2',
    text: 'comment two',
    author: '2',
    post: '11'
}, {
    id: '3',
    text: 'comment three',
    author: '2',
    post: '10'
}, {
    id: '4',
    text: 'comment four',
    author: '3',
    post: '12'
}];

/**
 * type definition
 * 
 * application schema. Operation to be performed through api and data types.
 * 
 * scaler -> String, Int, Boolean, Float, ID
 * 
 * */

const typeDefs = `
    type Query {
        users(query: String): [User!]!
        posts(query: String): [Post!]!
        comments: [Comment!]!
    }

    type User {
        id: ID!
        name: String!
        email: String!
        age: Int!
        posts: [Post!]!
        comments: [Comment!]!
    }

    type Post {
        id: ID!
        text: String!
        body: String!
        published: Boolean!
        author: User!
        comments: [Comment!]!
    }

    type Comment {
        id: ID!
        text: String!
        author: User!
        post: [Post!]!
    }
`;

/**
 * resolvers for api
 * 
 * */
const resolvers = {
    Query: {
        users(parent, args, ctx, info) {
            if(!args.query) {
                return users;
            }

            else {
                return users.filter(user => user.name.toLowerCase().includes(args.query.toLowerCase()));
            }
        },
        posts(parent, args, ctx, info) {
            if(!args.query) {
                return posts;
            }
            return posts.filter(post => {
                const isTextMatch = post.text.toLowerCase().includes(args.query.toLowerCase());
                const isBodyMatch = post.body.toLowerCase().includes(args.query.toLowerCase());
                return isTextMatch || isBodyMatch;
            });
        },
        comments() {
            return comments;
        }
    },
    User: {
        posts(parent, args, ctx, info) {
            return posts.filter((post) => {
                return post.author === parent.id;
            });
        },
        comments(parent, args, ctx, info) {
            return comments.filter(comment => comment.author === parent.id);
        }
    },
    Post: {
        author(parent, args, ctx, info) {
            return users.find((user) => {
                return user.id === parent.author
            })
        },
        comments(parent, args, ctx, info) {
            return comments.filter(comment => comment.post === parent.id)
        }
    },
    Comment: {
        author(parent, args, ctx, info) {
            return users.find(user => user.id === parent.author);
        },
        post(parent, args, ctx, info) {
            return posts.filter(post => post.id === parent.post);
        }
    }
}

const server = new GraphQLServer({
    typeDefs,
    resolvers,
});

server.start(() => {
    console.log('server is up and running');
});