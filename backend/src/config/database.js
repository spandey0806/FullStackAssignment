const mongoose  = require('mongoose');

const connectDB = async () =>{
    try {
        await mongoose.connect('',{
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MongoDB Connected");
    } catch (error) {
        console.log("MongoDB Connection Error:",error);
    }
};

module.exports = connectDB ;