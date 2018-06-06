var mongoose = require('mongoose');

var TodoUserModel = {
    email : {
        type : String,
        required : true,
        minLength : 5,
        maxLength : 50,
        trim : true
    }
}


var user = mongoose.model('User', TodoUserModel);

module.exports = {
    user
};