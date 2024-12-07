require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const connectDB = require('./connect');
const userRoutes = require("./routes/user"); 

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));
app.use(express.static(path.join(__dirname, "../public"))); // Corrected static files path

app.use("/", userRoutes);

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/stockMarket', (req, res) => {
    res.render('stockMarket'); 
});

app.get('/MutualFunds', (req, res) => {
    res.render('mutualFunds');
});



app.get('/MutualFunds/BeginnersGuide', (req, res) => {
    res.render('beginnersGuide');
});

app.get('/MutualFunds/SIPCalculator', (req, res) => {
    res.render('sipCalculator');
});

app.get('/MutualFunds/LargeCap', (req, res) => {
    res.render('largeCap');
});

app.get('/MutualFunds/LargeMidCap', (req, res) => {
    res.render('largeMidCap');
});

app.get('/MutualFunds/MidCap', (req, res) => {
    res.render('midCap');
});

app.get('/MutualFunds/SmallCap', (req, res) => {
    res.render('smallCap');
});

app.get('/MutualFunds/Disclaimer', (req, res) => {
    res.render('disclaimer');
});

app.get('/Cryptocurrency', (req, res) => {
    res.render('cryptocurrency');
});

app.get('/Cryptocurrency/BeginnersGuide', (req, res) => {
    res.render('beginnersGuide');
});

app.get('/Cryptocurrency/Invest', (req, res) => {
    res.render('invest');
});

app.get('/Cryptocurrency/Disclaimer', (req, res) => {
    res.render('disclaimer');
});

app.get('/GovernmentSchemes', (req, res) => {
    res.render('governmentSchemes');
});

app.get('/FixedDeposit', (req, res) => {
    res.render('fixedDeposit');
});

connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
