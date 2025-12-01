const express=require('express');
const app=express();
const dotenv=require('dotenv').config();
const connectDB=require('./config/connDb');
const cors=require('cors');

const PORT=process.env.PORT || 3000;
connectDB();
app.use(express.json());
app.use(cors());
app.use("/recipe",require("./routes/recipe"));

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});