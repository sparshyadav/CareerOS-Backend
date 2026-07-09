const mongoose = require("mongoose");
const URL = process.env.MONGODB_URI;

const connectDB = async () => {
    try {
        await mongoose.connect(URL);
        console.log("MongoDB Connected");
    }
    catch (error) {
        console.error("MongoDB Connection Failed");
        console.errror(error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
