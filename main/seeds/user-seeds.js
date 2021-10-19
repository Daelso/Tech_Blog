const { User } = require('../models');

const userData = [{
        username: 'Chase',
        password: 'chase'

    },
    {
        username: 'Jeff',
        password: 'jeff'
    },
    {
        username: 'Chris',
        password: 'chris'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;