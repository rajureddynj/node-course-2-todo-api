// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); //ES6 Destructuring
// var obj = new ObjectID();
// console.log(`ObjectID: ${obj} created on ${obj.getTimestamp()}`);


//ES6 Destructuring
// var user = {name : 'Reddy', age : 39};
// var {name} = user;
// console.log(`user.name: ${name}`);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err){
        return console.log('Error @ DBConnect: ' + err);
    }

    console.log('Connected to DB.');
    const db = client.db('TodoApp');

    //deleteMany
    // db.collection('Todos').deleteMany({"completed" : true}).then((result) => {
    //     console.log(result);
    // });

    //deleteOne
    // db.collection('Todos').deleteOne({"completed" : true}).then((result) => {
    //     console.log(result);
    // });

    //findOneAndDelete
    db.collection('Todos').fineOneAndDelete({"test" : "something to do", "completed" : false}).then((result) => {
        console.log(result);
    });

    client.close();
})