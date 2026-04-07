const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    city:{ type: String },
    country:{ type: String},
    currency:{ type: String },
    email: { type: String, required: true, unique: true },
    phone: { type: String },
    photo: { type: String },
    accountNumber: { type: String, required: true, unique: true  },
    pin: { type: String },
    balance: { type: Number, default: 0 },
    atmCards:[
        {
            cardType: { type: String, required: true },
            cardNumber: { type: String},
            expiryDate: { type: String },
            cvv: { type: String }
        }
    ],
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('UserData', userSchema);