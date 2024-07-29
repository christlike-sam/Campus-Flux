const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 5000;

// Configure CORS
const corsOptions = {
    origin: 'http://localhost:5173', // Replace with your React app's URL
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization'
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

// Create a connection to the database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Replace with your XAMPP MySQL username, usually 'root'
    password: '', // Replace with your XAMPP MySQL password, usually empty
    database: 'campusflux' // Replace with your database name
});

// Connect to the database
db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the MySQL database.');
});

// Root route
app.get('/', (req, res) => {
    res.send('Welcome to the backend server');
});

// Sign Up endpoint
app.post('/signup', (req, res) => {
    const {
        refererCode,
        username,
        email,
        password
    } = req.body;

    // Check if email already exists
    const checkEmailSql = 'SELECT * FROM signup WHERE email = ?';
    db.query(checkEmailSql, [email], (err, results) => {
        if (err) {
            return res.status(500).send({
                error: err
            });
        }
        if (results.length > 0) {
            return res.status(400).send({
                error: 'Email already exists'
            });
        }

        // If email does not exist, proceed with registration
        const sql = 'INSERT INTO signup (refererCode, username, email, password) VALUES (?, ?, ?, ?)';
        db.query(sql, [refererCode, username, email, password], (err, result) => {
            if (err) {
                return res.status(500).send({
                    error: err
                });
            }
            res.send({
                success: true,
                message: 'User registered successfully!'
            });
        });
    });
});

// Login endpoint
app.post('/login', (req, res) => {
    const {
        email,
        password
    } = req.body;
    const sql = 'SELECT * FROM signup WHERE email = ? AND password = ?';
    'INSERT INTO login (email, password) VALUES (?, ?)';

    db.query(sql, [email, password], (err, results) => {
        if (err) {
            return res.status(500).send({
                error: err
            });
        }
        if (results.length > 0) {
            res.send({
                success: true,
                message: 'Login successful!'
            });
        } else {
            res.status(401).send({
                success: false,
                message: 'Invalid email or password.'
            });
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});