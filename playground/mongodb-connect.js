//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if(err){
        return console.log('Unable to connect to MongoDB Server');
    }
    console.log("Connection to MongoDB Server");
    const db = client.db('TodoApp');
    
    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if(err){
    //         return console.log('Unable to insert Todo', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    db.collection('Users').insertOne({
        name: 'Aziz',
        age: 25,
        location: 'Mumbai'
    }, (err, result) => {
        if(err) {
            return console.log('Unable to insert User', err);
        }
        console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
    });

    client.close();
});