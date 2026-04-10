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
const sendOTP = require('./email/resend')
const cloudinary = require('./cloudinary')
const upload = require('./upload')

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
    const { firstName, lastName, address, password, country, currency, accountType, phone, email } = req.body;
    // Your signup logic here
    const code = generateVerificationCode();

    // const newUser = new IsVerify({
    //   data: { firstName, lastName, email, phone, password },
    //   email,
    //   code
    // })
        const hashedPassword = await bcrypt.hash(password, 10);
        const accountNumberValue = generateAccountNumber();
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
        accountNumber:accountNumberValue
    });
     await newUser.save();
    // await axios.post(
    //       "https://studynest.com.ng/send-otp",
    //       {
    //         userEmail: email,
    //         companyName: "easytrustbank", // your current app name
    //         userCode: code
    //       }
    //     );
    // sendOTP(email, code)
    //await newUser.save();
    const user = { firstName, lastName, email, phone, accountNumberValue, currency, photo };
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error'});
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


const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@easytrustbank.com';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'AdminPass123!';
const ADMIN_TOKENS = new Map();

function verifyAdminToken(req, res, next) {
  const token = req.headers['x-admin-token'] || req.body.adminToken || req.query.adminToken;
  if (!token || !ADMIN_TOKENS.has(token)) {
    return res.status(401).json({ message: 'Admin authorization required' });
  }
  next();
}

app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });    
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        return res.status(400).json({ message: 'Invalid email or password' });
    }
    res.status(200).json({ message: 'Login successful', user });
    console.log(user)
    } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.post('/api/admin/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (email !== ADMIN_EMAIL || password !== ADMIN_PASSWORD) {
      return res.status(401).json({ message: 'Invalid admin credentials' });
    }
    const token = crypto.randomBytes(24).toString('hex');
    ADMIN_TOKENS.set(token, { email, createdAt: Date.now() });
    res.status(200).json({ message: 'Admin login successful', token, admin: { email } });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.get('/api/admin/all-users', async (req, res) => {
  try {
    const users = await User.find().select('-password');
    console.log(users)
    res.status(200).json({ users });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }

});

app.get('/api/admin/user', async (req, res) => {
  try {
    const { email} = req.query;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json( user );
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.post('/api/admin/transaction', async (req, res) => {
  try {
    const {
      userAccountNumber,
      username,
      amount,
      type,
      title,
      description,
      status,
      date,
      time,
      bank
    } = req.body;

    const numericAmount = Number(amount);

    // Validation
    if (!['credit', 'debit'].includes(type)) {
      return res.status(400).json({ message: 'Invalid transaction type' });
    }

    if (numericAmount <= 0) {
      return res.status(400).json({ message: 'Amount must be positive' });
    }

    // Update user balance
    const user = await User.findOneAndUpdate(
      { accountNumber: userAccountNumber },
      { $inc: { balance: type === 'debit' ? -numericAmount : numericAmount } },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Save transaction history
   const historyEntry = new History({
      date: date ? new Date(date) : new Date(),
      description: description || (type === 'credit' ? 'Admin deposit' : 'Admin withdrawal'),
      amount: numericAmount,
      userAccountNumber,
      username,
      type,
      title,
      time: time || new Date().toLocaleTimeString('en-US', { hour12: false }),
      status,

  // ✅ ADD THESE
  email: user.email,
  bank // or whatever field name you used
});

    await historyEntry.save();

    res.status(200).json({
      message: 'Admin transaction completed',
      user,
      history: historyEntry
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.post('/api/admin/card', async (req, res) => {
  try {
    const { targetEmail, targetAccountNumber, cardType, cardNumber, expiryDate, cvv } = req.body;
    const search = {};
    if (targetEmail) search.email = targetEmail;
    if (targetAccountNumber) search.accountNumber = targetAccountNumber;
    const user = await User.findOne(search);
    if (!user) {
      return res.status(404).json({ message: 'Target user not found' });
    }
    user.atmCards.push({ cardType, cardNumber, expiryDate, cvv });
    await user.save();
    res.status(200).json({ message: 'Card added successfully', cards: user.atmCards });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.get('/api/history', async (req, res) => {
  try {
    const { email } = req.query;
    console.log(email)
    const history = await History.find({ email }).sort({ timestamp: -1 });
    const user = await User.findOne({ email }); 
    res.status(200).json({history, user} );
    console.log(history)
    } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});
app.post('/api/history', async (req, res) => {
  try {
    const {
      userId,
      email,
      date,
      description,
      amount,
      userAccountNumber,
      username,
      time,
      type,
      title,
      status
    } = req.body;

    let historyEmail = email;
    let historyUsername = username;
    let historyAccountNumber = userAccountNumber;

    if (userId && (!historyEmail || !historyAccountNumber || !historyUsername)) {
      const targetUser = await User.findById(userId);
      if (targetUser) {
        historyEmail = targetUser.email;
        historyAccountNumber = targetUser.accountNumber;
        historyUsername = `${targetUser.firstName} ${targetUser.lastName}`;
      }
    }

    if (!historyEmail || !historyAccountNumber || !historyUsername) {
      return res.status(400).json({ message: 'Missing required history entry details' });
    }

    const newHistory = new History({
      email: historyEmail,
      date: date ? new Date(date) : new Date(),
      description: description || 'Manual transaction entry',
      amount,
      userAccountNumber: historyAccountNumber,
      username: historyUsername,
      time: time || new Date().toLocaleTimeString('en-US', { hour12: false }),
      type: type || (amount >= 0 ? 'credit' : 'debit'),
      title: title || 'Manual Entry',
      status: status || 'Completed'
    });
    await newHistory.save();
    res.status(200).json({ message: 'History entry created successfully', history: newHistory });
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
app.get('/api/history', async (req, res) => {
  console.log('History query:', req.query);
  try {
    const { email } = req.query;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    const history = await History.find({ email }).sort({ timestamp: -1 });
    console.log(history)
    res.status(200).json(history );
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
//DELETE USER ACCOUNT 
app.delete('/api/delete', async (req, res)=>{
  const {email} = req.query;
  try{
    await User.findOneAndDelete({email})
    res.status(200).json({message:"deleted"})
  }catch(e){
    res.status(500).json({mssage:"Server error "})
    console.log(e)
  }
})

app.post('/api/update_profile', upload.single('photo'), async (req, res) => {
  const photo = req.file;
  const { email } = req.body;

  try {
    if (!photo) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    // Upload to Cloudinary
    const result = await cloudinary.uploader.upload(photo.path);

    // Get image URL
    const publicUrl = result.secure_url;

    // Update user
    const updatedUser = await User.findOneAndUpdate(
      { email },
      { photo: publicUrl },
      { new: true }
    );
    const user = await User.findOne({email})
    console.log(user, publicUrl)
    res.status(200).json({
      message: "Profile updated successfully",
      user: updatedUser,
    });

  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Server error" });
  }
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  // IsVerify.deleteMany({})
  // .then(result=>{
  //   console.log("Deleted all verification records")
  // })
  // .catch(err=>{
  //   console.log(err)
  // })
});