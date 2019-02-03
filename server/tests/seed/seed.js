const {ObjectID} = require('mongodb');
const jwt = require('jsonwebtoken');

const {Todo} = require('./../../models/Todo');
const {User} = require('./../../models/User');

let userOneId = new ObjectID();
let userTwoId = new ObjectID();

const users = [{
    _id: userOneId,
    email: 'aziz@example.com',
    password: 'userOnePass',
    tokens: [{
        access: 'auth',
        token: jwt.sign({_id: userOneId.toHexString(), access: 'auth'}, 'abc123').toString()
    }]
}, {
    _id: userTwoId,
    email: 'paul@example.com',
    password: 'userTwoPass', 
    tokens: [{
        access: 'auth',
        token: jwt.sign({_id: userTwoId.toHexString(), access: 'auth'}, 'abc123').toString()
    }]
}];

const todos = [{
    _id: new ObjectID(),
    text: 'First test todo',
    _owner: userOneId
}, {
    _id: new ObjectID(),
    text: 'Second test todo',
    completed: true,
    completedAt: 1323535,
    _owner: userTwoId
}];

const populateUsers = (done) => {
    User.deleteMany({}).then(() => {
        let userOne = new User(users[0]).save();
        let userTwo = new User(users[1]).save();

        return Promise.all([userOne, userTwo]);
    }).then(() => done());
};

const populateTodos = (done) => {
    Todo.deleteMany({}).then(() => {
        return Todo.insertMany(todos);
    }).then(() => done());
};

module.exports = {todos, populateTodos, users, populateUsers};