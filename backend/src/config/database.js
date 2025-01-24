const mongoose  = require('mongoose');
const {ATLAS_DB_URL} = require('./server.config')
const connectDB = async () =>{
    try {
        await mongoose.connect(ATLAS_DB_URL);
        console.log("MongoDB Connected");
    } catch (error) {
        console.log("MongoDB Connection Error:",error);
    }
};

module.exports = connectDB ;