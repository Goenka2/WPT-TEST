const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

// Configure MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root123',
  database: 'test',
});

// Connect to MySQL
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// Set up middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Define routes
app.get('/', (req, res) => {
  res.redirect('/login');
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  // Check credentials in the database and perform the login logic


  if (loginSuccessful) {
    res.redirect('/products');
  } else {
    res.send('Invalid credentials');
  }
});

app.get('/products', (req, res) => {
  // Fetch products from the database and send them to the client


  res.send(products);
});

app.post('/products', (req, res) => {
  const { pid, pname, price } = req.body;
  // Add the product to the database


  res.send('Product added successfully');
});

app.delete('/products/:pid', (req, res) => {
  const { pid } = req.params;
  // Delete the product from the database


  res.send('Product deleted successfully');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
