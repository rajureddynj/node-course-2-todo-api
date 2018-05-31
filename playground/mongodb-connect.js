// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); //ES6 Destructuring
// var obj = new ObjectID();
// console.log(`ObjectID: ${obj} created on ${obj.getTimestamp()}`);


//ES6 Destructuring
var user = {name : 'Reddy', age : 39};
var {name} = user;
console.log(`user.name: ${name}`);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err){
        return console.log('Error @ DBConnect: ' + err);
    }

    console.log('Connected to DB.');
    const db = client.db('TodoApp');

    // db.collection('Todos').insertOne({
    //     test : "something to do",
    //     completed : false
    // }, (err, result) => {
    //     if(err) return console.log(`Unable to insert a document. ${err}`);
    //     console.log(`Document inserted. ${JSON.stringify(result.ops, undefined, 2)}`);
    // })
    //
    // db.collection('Users').insertOne({
    //     name : 'Reddy',
    //     age: 38,
    //     location : 'New Jersey, USA'
    // }, (err, result) =>{
    //     if(err) return console.log(`Unable to insert a document. ${err}`);
    //     console.log(`Document inserted. ${JSON.stringify(result.ops, undefined, 2)}`);
    //     console.log(`Document inserted******. ${JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2)}`);
    // })

    client.close();
})