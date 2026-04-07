const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    data:{
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        address: { type: String },
        city: { type: String },
        country: { type: String },
        currency: { type: String },
        accountType: { type: String },
        phone: { type: String }, 
        password: { type: String, required: true },
        },
        email: { type: String, required: true, unique: true },
        code: { type: String, required: true },
        createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);