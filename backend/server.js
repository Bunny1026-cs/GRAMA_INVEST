require('dotenv').config();

const express = require('express');
const axios = require('axios'); // Axios is imported but was missing in your code
const { LeetCode } = require("leetcode-query"); // Fixed mixed `require` and `import` syntax
const cors = require('cors');
const userRoutes = require("./routes/user");
const { urlencoded } = require('body-parser');
const connectDB = require('./connect');
const path = require('path');
const User = require('./models/user'); // Import the User model

const app = express();
const leetcode = new LeetCode(); // Initialize LeetCode instance

// Middleware setup
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, "../frontend/user/public"))); // Corrected static file path
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(urlencoded({ extended: true }));

connectDB();





// Routes
app.use("/", userRoutes);

// Server setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
