import express from "express";
import { getStudent , postStudent } from "../controllers/studentcontroller.js";


let studentRouter = express.Router();


studentRouter.get("/", getStudent);

studentRouter.post("/", postStudent);


export default studentRouter;



