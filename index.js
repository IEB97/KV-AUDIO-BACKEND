import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import studentRouter from './routes/studentRoutes.js';

const app = express();
app.use(bodyParser.json());

let mongoURL = "mongodb+srv://IEB97:123@cluster0.p3sm5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(mongoURL);

const connection = mongoose.connection;
    connection.once ("open", () => {
        console.log("MongoDB connection established successfully");
    } 
);       

app.use("/students", studentRouter);

app.listen(3000, () => {
    console.log('Server is running on port 3000');

});