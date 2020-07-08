const Query = {
    users(parent, args, { db }, info) {
        if(!args.query) {
            return db.users;
        }

        else {
            return db.users.filter(user => user.name.toLowerCase().includes(args.query.toLowerCase()));
        }
    },
    posts(parent, args, { db }, info) {
        if(!args.query) {
            return db.posts;
        }
        return db.posts.filter(post => {
            const isTextMatch = post.text.toLowerCase().includes(args.query.toLowerCase());
            const isBodyMatch = post.body.toLowerCase().includes(args.query.toLowerCase());
            return isTextMatch || isBodyMatch;
        });
    },
    comments(parent, args, { db }, info) {
        return db.comments;
    }
};

export { Query as default };