const mongoose = require('mongoose');
const connectDB = async () => {
    await mongoose.connect(process.env.CONNECT_DB).then(() => {
        console.log("Database connected successfully");
    })}
    module.exports = connectDB;