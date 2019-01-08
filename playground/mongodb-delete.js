//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if(err){
        return console.log('Unable to connect to MongoDB Server');
    }
    console.log("Connection to MongoDB Server");
    const db = client.db('TodoApp');
    
    // db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then((result) => {
    //     console.log(JSON.stringify(result, undefined, 2));
    // }, (err) => {
    //     console.log("Unable to delete document", err);
    // });

    // db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result) => {
    //     console.log(JSON.stringify(result, undefined, 2));
    // }, (err) => {
    //     console.log("Unable to delete document", err);
    // });

    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(JSON.stringify(result, undefined, 2));
    // }, (err) => {
    //     console.log("Unable to delete document", err);
    // });

    // db.collection('Users').deleteMany({name: 'Aziz'}).then((result) => {
    //     console.log(JSON.stringify(result, undefined, 2));
    // }, (err) => {
    //     console.log("Unable to delete document", err);
    // });

    db.collection('Users').findOneAndDelete({
        _id: new ObjectID('5c2a408366e1881cc0ee3e72')
    }).then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
    }, (err) => {
        console.log("Unable to delete document", err);
    });
    //client.close();
});