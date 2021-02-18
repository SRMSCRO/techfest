const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'email name cannot be blank']
    },
    password: {
        type: String,
        required: [true, 'Password cannot be blank']
    },
    name: {
        type: String,
        required: [true, 'name cannot be blank']
    },
    opco: {
        type: String,
        required: [true, 'opco cannot be blank']
    },
    
   
});

module.exports = mongoose.model('User', userSchema);