import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import userrouter from './routes/userrouter.js';
import productRouter from './routes/productRouter.js';
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(bodyParser.json());

app.use((req, res, next) => {
    let token = req.headers['authorization'];
    if (token!=null){
        token = token.replace("Bearer ", "");

        jwt.verify(token, "kv-secret-89!",
            (err, decoded) => {
                if(!err){
                    req.user = decoded;
                }})

    }
    next();

})



let mongoURL = process.env.MONGO_URL;
mongoose.connect(mongoURL);

const connection = mongoose.connection;
    connection.once ("open", () => {
        console.log("MongoDB connection established successfully");
    } 
);       

app.use("/api/users",userrouter)
app.use("/api/products", productRouter)


app.listen(3000, () => {
    console.log('Server is running on port 3000');

}); 