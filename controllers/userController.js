import UserModel from "../models/User";

export function registerUser(req, res) {

    const newUser = new User(req.body);
        newUser.save ().then( ()=>{
            res.json({message : "User created successfully"});
        )}.catch((error)=> {
            res.status(500).json({error : "User registration failed"});
        });
}

//day 04.

//01.01.52


