
const {MongoClient, ObjectID} = require('mongodb'); //ES6 Destructuring

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err){
        return console.log('Error @ DBConnect: ' + err);
    }

    console.log('Connected to DB.');
    const db = client.db('TodoApp');

    db.collection('Todos').findOneAndUpdate({
        _id : new ObjectID('5b15e44f64647fbda1e466a8')
    }, {
        $set: {
            "completed" : false
        },
        $inc: {
            "times" : 1
        }
    }, {
        returnOriginal : false
    }).then((result) =>{
        console.log(result);
    });

 client.close();
});