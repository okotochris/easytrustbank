require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000
const mongoose = require('mongoose');
const crypto = require('crypto');
const User = require('./schema/user');
const History = require('./schema/history');
const IsVerify = require('./schema/isVerify');  
const axios = require('axios');
const bcrypt = require('bcrypt');

const mongoseString = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/mydb'
mongoose.connect(mongoseString)
.then(result=>{
    console.log("Mongoose connected")
})
.catch(err=>{
    console.log(err)
})

app.use(cors());
app.use(express.json());



function generateAccountNumber() {
  return crypto.randomInt(1000000000, 9999999999).toString(); // 10-digit number
}

function generateVerificationCode() {
  return Math.floor(10000 + Math.random() * 90000).toString();
}

app.post('/api/signup', async (req, res) => {
  try {
    const { firstName, lastName, email, phone, password } = req.body;
    console.log(req.body);
    // Your signup logic here
    const code = generateVerificationCode();
    const newUser = new IsVerify({
      data: { firstName, lastName, email, phone, password },
      email,
      code
    });
    await axios.post(
          "https://studynest.com.ng/send-otp",
          {
            userEmail: email,
            companyName: "easytrustbank", // your current app name
            userCode: code
          }
        );
    await newUser.save();
    res.status(200).json({ message: 'Verification code sent to email' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

//Verify code from email
app.post('/api/verify', async (req, res) => {
  console.log(req.body)
  try {
    const { email, code } = req.body;
    const verificationRecord = await IsVerify.findOne({ email, code });
    if (!verificationRecord) {
      return res.status(400).json({ message: 'Invalid verification code' });
    }
    const accountNum = generateAccountNumber();
    const { firstName, lastName, address, password, country, currency, accountType, phone } = verificationRecord.data;
    const hashedPassword = await bcrypt.hash(password, 10);
    const accountNumber = generateAccountNumber();
    const newUser = new User({  
        firstName,
        lastName,
        address,
        country,
        currency,
        accountType,
        email,
        phone,
        password: hashedPassword,
        accountNumber:accountNum 
    });
    await newUser.save();
    const user = { firstName, lastName, email, phone, accountNumber };
    await IsVerify.deleteOne({ email });
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});
//UPDATE PIN
app.post('/api/set-pin', async (req, res) => {
  try {
    const { email, pin } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    user.pin = pin;
    await user.save();
    res.status(200).json({ message: 'PIN set successfully' });
  }
    catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

//VERIFY PIN
app.post('/api/verify-pin', async (req, res) => {
  try {
    const { email, pin } = req.body;
    console.log(req.body)
    const user = await User.findOne({ email }); 
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    if (user.pin !== pin) {
      return res.status(400).json({ message: 'Invalid PIN' });
    }
    res.status(200).json({ message: 'PIN verified successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(req.body)
    // Your login logic here
    const user = await User.findOne({ email });
    console.log(user)
    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });    
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        return res.status(400).json({ message: 'Invalid email or password' });
    }
    res.status(200).json({ message: 'Login successful', user });
    } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});
app.get('/api/history', async (req, res) => {
  try {
    const { email } = req.query;
    console.log(email)
    // Your history retrieval logic here
    const history = await History.find({ email }).sort({ timestamp: -1 });
    res.status(200).json({ history });
    } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});
app.post('/api/history', async (req, res) => {
  try {
    const { userId, date, description, amount, userAccountNumber, username, time } = req.body;
    const newHistory = new History({
      userId,
      date,
      description,
      amount,
      userAccountNumber,
      username,
      time
    });
    await newHistory.save();
    res.status(200).json({ message: 'History entry created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});
//Add Card
app.post('/api/add-card', async (req, res) => {
  try {
    const { userId, cardType, cardNumber, expiryDate, cvv } = req.body;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    user.atmCards.push({ cardType, cardNumber, expiryDate, cvv });
    await user.save();
    res.status(200).json({ message: 'Card added successfully', cards: user.atmCards });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});
app.get('/api/cards', async (req, res) => {
  console.log('Cards query:', req.query);
  try {
    const { email } = req.query;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    const cards = user.atmCards;
    res.status(200).json(cards);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });

  }
});

app.post('/api/update-profile', async (req, res) => {
  try {
    const { userId, fname, lname, phone, photo } = req.body;
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { fname, lname, phone, photo },
        { new: true }
    );
    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ message: 'Profile updated successfully', user: updatedUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  // User.deleteMany({})
  // .then(result=>{
  //   console.log("Deleted all verification records")
  // })
  // .catch(err=>{
  //   console.log(err)
  // })
});