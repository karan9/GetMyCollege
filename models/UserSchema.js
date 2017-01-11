var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// TODO: add encryption

var userSchema = new Schema({
    username: {
        type: String,
        required: true   
    },
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    } 
});

// export everything
module.exports = mongoose.model('User', userSchema);