const mongoose = require('mongoose');

const User=new mongoose.Schema({
    Name:String,
    OpCo:String,
    Email:String,
    Password:String,
    Position:String,
    // Emp_ID:String,
});

module.exports = mongoose.model('User', User);