const express = require('express');
const { signUp, login, uploadProfilePhoto, upload } = require('../controllers/user');
const { verifyToken } = require('../middleware/auth');

const router = express.Router();

router.post('/signup', signUp);
router.post('/login', login);
router.post('/upload-profile-photo', verifyToken, upload.single('profilePhoto'), uploadProfilePhoto);
router.get('/', (req, res) => {
  res.render('home');
});

module.exports = router;
