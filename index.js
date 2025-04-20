import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import userrouter from './routes/userrouter.js';
import productRouter from './routes/productRouter.js';
import jwt from "jsonwebtoken";


const app = express();
app.use(bodyParser.json());

app.use((req, res, next) => {
    let token = req.headers('authorization');
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



let mongoURL = "mongodb+srv://IEB97:123@cluster0.p3sm5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
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