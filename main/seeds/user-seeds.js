const { User } = require('../models');

const userData = [{
        username: 'Chase',
        password: 'cm20'

    },
    {
        username: 'Jeff',
        password: 'Jeff20'
    },
    {
        username: 'Chris',
        password: 'Chris20'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;