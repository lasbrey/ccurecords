//constant declaration
const express = require("express");
const port = process.env.PORT || 5000;
const dotenv = require("dotenv");
const app = express();
const connectToDatabase = require('./config/db');
const cors = require('cors');

dotenv.config({ path: "./config/.env" });

connectToDatabase();

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: false }));

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

// Define Routes
app.use('/', require('./routes/auth'));
app.use(cors());

//Configure Port
app.listen(port, () => {
  console.log(` ✬  server started on port ${port}`);
});
