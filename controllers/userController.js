import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


export function registerUser(req, res) {

    const data = req.body;

    data.password = bcrypt.hashSync(data.password, 10);

    const newUser = new User (data)
 
    newUser.save().then(() => {
        res.json({message: "User created successfully"});
    }).catch((error) => {
        res.status(500).json({error: "User registration failed"});
    })};

export function loginUser(req, res) {
    const data = req.body;

    User.findOne({
        email: data.email
    }).then((user) => {
            if (user == null) {
                res.status(404).json({error: "User not found"});
            }   else {
                res.json({message: "User found", user: user});

                const isPasswordCorrect = bcrypt.compareSync(data.password, user.password);

                if (isPasswordCorrect) {
                     const token = jwt.sign({
                        firtName : user.firstName,
                        lastName : user.lastName,
                        email : user.email,
                        role : user.role,
                     },"kv-secret-89!") 
                    res.json({message: "Login successful" , token: token});
                } else {
                    res.status(401).json({error: "Login Failed"});
                }
}} )
}
       


//day 06

//16.00


