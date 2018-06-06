var mongoose = require('mongoose');

var TodoModel = {
    text : {
        type : String,
        required : true,
        minLength : 1,
        maxLength : 500,
        trim : true
    },
    completed : {
        type : Boolean,
        default : false
    },
    completedAt : {
        type : Number,
        default : null
    }
};

var Todo = mongoose.model('Todo', TodoModel);

module.exports = {
    Todo
};