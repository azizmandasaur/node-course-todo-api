const {ObjectID} = require('mongodb');

const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/Todo');
const {User} = require('../server/models/User');

// Todo.deleteMany({}).then((res) => {
//     console.log(res);
// }, (e) => {
//     console.log(e);
// });

Todo.findByIdAndDelete('5c363766f184b117e0b987d9').then((todo) => {
    console.log(todo);
}, (e) => {
    console.log(e);
});