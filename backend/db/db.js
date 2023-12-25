const mongoose = require("mongoose");

const URI ="mongodb://localhost:27017/school";

const connectDB = async () => {
    try {
        await mongoose.connect(URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        mongoose.set('strictQuery', true); // Set strictQuery option to false

        console.log("MongoDB connected");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
        process.exit(1);
    }
};

module.exports = connectDB;