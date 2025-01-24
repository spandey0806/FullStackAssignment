const express = require('express');
const cors = require('cors');
const app = express();
const { PORT } = require("./src/config/server.config");
const connectDB = require('./src/config/database')
 
app.use(cors());
app.use(express.json());
 
app.listen(PORT, async() => {
    console.log(`Server running on port ${PORT}`);
    await connectDB();
    console.log("Successfully connected to DB");
  });