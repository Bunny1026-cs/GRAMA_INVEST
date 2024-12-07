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

app.use("/", userRoutes);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));
app.use(express.static(path.join(__dirname, "../views")));
app.use(cors());

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/stockMarket', (req, res) => {
    res.render('stock');
});

connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
