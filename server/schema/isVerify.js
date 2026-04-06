const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    data:{
        fname: { type: String, required: true },
        lname: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        phone: { type: String }, 
        pin: { type: String, required: true },
        password: { type: String, required: true },
    },
    email: { type: String, required: true, unique: true },
    code: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);