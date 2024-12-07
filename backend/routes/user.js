const express = require('express');
const { uploadProfilePhoto, upload } = require('../controllers/user');
const { verifyToken } = require('../middleware/auth');
const User = require('../models/User'); // Corrected path for User model

const router = express.Router();

// Sign-up route
router.post('/signup', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = new User({ name, email, password });
        await user.save();
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        console.error('Error during sign-up:', error);
        res.status(500).json({ message: 'Sign-up failed' });
    }
});

// Login route
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (user && user.password === password) {
            res.status(200).json({ message: 'Login successful' });
        } else {
            res.status(401).json({ message: 'Invalid email or password' });
        }
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Login failed' });
    }
});

router.post('/upload-profile-photo', verifyToken, upload.single('profilePhoto'), uploadProfilePhoto);
router.get('/', (req, res) => {
  res.render('home');
});

module.exports = router;
