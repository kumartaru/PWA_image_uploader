const express = require("express");
const bodyParser = require("body-parser");
const userRoute = require("./src/routes/userRoute");
const {connection}=require('./config/config')

const app = express();

const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(express.urlencoded({extended:false}))
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database');

  // Define the SQL query to create the table
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS images (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      path VARCHAR(255) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `;

  connection.query(createTableQuery, (error, results, fields) => {
    if (error) {
      console.error('Error creating table:', error);
    } else {
      console.log("Table created successfully");
    }
  });
});

app.use("/users", userRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
