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
  const randomDigits = crypto.randomBytes(5).toString('hex').slice(0, 10);
  return  randomDigits;
}
function generateVerificationCode() {
  const randomDigits = crypto.randomBytes(3).toString('hex').slice(0, 6);
  return randomDigits;
}

app.post('/api/signup', async (req, res) => {
  try {
    const { fname, lname, email, phone, pin, password } = req.body;
    console.log(req.body);
    // Your signup logic here
    const code = generateVerificationCode();
    const newUser = new IsVerify({
      data: { fname, lname, email, phone, pin, password },
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
  try {
    const { email, code } = req.body;
    const verificationRecord = await IsVerify.findOne({ email, code });
    if (!verificationRecord) {
      return res.status(400).json({ message: 'Invalid verification code' });
    }
    const { fname, lname, phone, pin, password } = verificationRecord.data;
    const hashedPassword = await bcrypt.hash(password, 10);
    const accountNumber = generateAccountNumber();
    const newUser = new User({  
        fname,
        lname,
        email,
        phone,
        pin,
        password: hashedPassword,
        accountNumber
    });
    await newUser.save();
    const user = { fname, lname, email, phone, accountNumber };
    await IsVerify.deleteOne({ email });
    res.status(200).json({ message: 'Account verified and created successfully', user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Your login logic here
    const user = await User.findOne({ email });
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
    const { userId } = req.query;
    // Your history retrieval logic here
    const history = await History.find({ userId }).sort({ timestamp: -1 });
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
});