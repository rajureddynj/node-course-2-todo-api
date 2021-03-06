var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/Todos', (req, res) => {
    console.log(req.body);
    var todo = new Todo({
        text : req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) =>{
        res.status(400).send(e);
    });
});

app.listen(3000, () =>{
    console.log('Started on port 3000');
});



//Creating a new Todo
//
// var newTodo = new Todo({
//     text : '      Cook dinner'
// });
//
// var newUser = new User({
//     email : 'rraju@raju.com'
// })
//
// newTodo.save().then((doc) =>{
//     // console.log('Saved doc: ' + doc);
//     console.log(`Todo document saved ${JSON.stringify(doc, undefined, 2)}`);
// }, (e) =>{
//     console.log('Unable to save Todo');
// });
//
// newUser.save().then((doc) =>{
//     console.log(`User document is inserted ${JSON.stringify(doc, undefined, 2)}`);
// }, (e) =>{
//    console.log('Unable to save User.')
// });
