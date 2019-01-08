const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/Todo');
const {User} = require('./../server/models/User');

var id = '5c31e6255660bc134019a898';

if(!ObjectID.isValid(id)) {
    console.log('The id is invalid');
}

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos: ', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo: ', todo);
// });

// Todo.findById(id).then((todo) => {
//     if(!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Todo By Id: ', todo);
// }).catch((e) => console.log(e));

User.findById('5c2c39cfff99491c50ebb173').then((user) => {
    if(!user) {
        return console.log('User not found');
    }

    console.log('User: ', user);
}, (e) => {
    console.log(e);
});