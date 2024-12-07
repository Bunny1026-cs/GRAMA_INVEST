require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const { exec } = require('child_process');
const connectDB = require('./connect');
const userRoutes = require("./routes/user"); 

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

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

// Endpoint to trigger the Python voice bot
app.post('/start-voice-bot', (req, res) => {
    exec('python C:/Users/jayan/Downloads/PythonProject1/PythonProject1/main.py', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing Python script: ${error.message}`);
            return res.status(500).json({ message: 'Error starting voice bot' });
        }
        if (stderr) {
            console.error(`Python script stderr: ${stderr}`);
            return res.status(500).json({ message: 'Error in voice bot' });
        }
        console.log(`Python script stdout: ${stdout}`);
        res.status(200).json({ message: 'Voice bot started', output: stdout });
    });
});

connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
