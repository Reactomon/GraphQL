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

const db = {
    users,
    posts,
    comments,
}

export { db as default }; 