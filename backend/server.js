require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const { exec } = require('child_process');
const connectDB = require('./connect');
const userRoutes = require("./routes/user");

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: ['http://localhost:3000'] })); // Add allowed origins

// Static files and views setup
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));
app.use(express.static(path.join(__dirname, '../public')));

// Routes 
app.use("/", userRoutes);

// Render Views
app.get('/', (req, res) => res.render('home'));
app.get('/stockMarket', (req, res) => res.render('stockMarket'));
app.get('/MutualFunds', (req, res) => res.render('mutualFunds'));
app.get('/MutualFunds/BeginnersGuide', (req, res) => res.render('beginnersGuide'));
app.get('/MutualFunds/SIPCalculator', (req, res) => res.render('sipCalculator'));
app.get('/MutualFunds/LargeCap', (req, res) => res.render('largeCap'));
app.get('/MutualFunds/LargeMidCap', (req, res) => res.render('largeMidCap'));
app.get('/MutualFunds/MidCap', (req, res) => res.render('midCap'));
app.get('/MutualFunds/SmallCap', (req, res) => res.render('smallCap'));
app.get('/MutualFunds/Disclaimer', (req, res) => res.render('disclaimer'));
app.get('/Cryptocurrency', (req, res) => res.render('cryptocurrency'));
app.get('/Cryptocurrency/BeginnersGuide', (req, res) => res.render('beginnersGuide'));
app.get('/Cryptocurrency/Invest', (req, res) => res.render('invest'));
app.get('/Cryptocurrency/Disclaimer', (req, res) => res.render('disclaimer'));
app.get('/GovernmentSchemes', (req, res) => res.render('governmentSchemes'));
app.get('/FixedDeposit', (req, res) => res.render('fixedDeposit'));

// Trigger Python Voice Bot
app.post('/start-voice-bot', (req, res) => {
    const scriptPath = path.join(__dirname, 'path/to/main.py');
    exec(`python ${scriptPath}`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing Python script: ${error.message}`);
             return res.status(500).json({ message: 'Error starting voice bot' });
        } 
        console.log(`Python script stdout: ${stdout}`);
        res.status(200).json({ message: 'Voice bot started', output: stdout });
    }); 
});

// Error Handling
app.use((req, res) => res.status(404).render('404', { message: 'Page Not Found' }));
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
}); 

// Connect to MongoDB and Start Server
connectDB();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
