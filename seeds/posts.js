const { Post } = require('../models');

const postData = [{
        title: 'Sick new tech',
        content: 'Chec out this cool new tech I found!',
        user_id: 1

    },
    {
        title: 'I hate handlebars',
        content: 'This stuff is really confusing!',
        user_id: 2
    },
    {
        title: 'Can you see me?',
        content: 'This is a test post!',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;