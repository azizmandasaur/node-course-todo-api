//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if(err){
        return console.log('Unable to connect to MongoDB Server');
    }
    console.log("Connection to MongoDB Server");
    const db = client.db('TodoApp');
    
    // db.collection('Todos').find({completed: false}).toArray().then((docs) => {
    //   console.log('Todos');
    //   console.log(JSON.stringify(docs, undefined, 2));  
    // }, (err) => {
    //     console.log("Unable to fetch Todos", err);
    // });

    // db.collection('Todos').find({
    //     _id: new ObjectID('5c2a4257fd87ac5b6d39580e')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));  
    //   }, (err) => {
    //       console.log("Unable to fetch Todos", err);
    // });

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos Count: ${count}`);  
    //   }, (err) => {
    //       console.log("Unable to fetch Todos", err);
    // });

    db.collection('Users').find({name: 'Aziz'}).toArray().then((docs) => {
        console.log("Todos");
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log("Unable to fetch Todos", err);
    });

    //client.close();
});