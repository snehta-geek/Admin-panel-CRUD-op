import express from "express";
import Admin from "../models/adminModel.js";
import expressAsyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";
import adData from "../admin.js";
import { generateToken } from "../utils.js";


const adminRouter=express.Router();

adminRouter.get("/seed",expressAsyncHandler(async(req,res) =>{
    const createdAdmin=await Admin.insertMany(adData.users);
    res.send({createdAdmin});

}));

adminRouter.post('/signin',expressAsyncHandler(async(req,res) =>{
    const admin=await Admin.findOne({email: req.body.email});
    if(admin){
        if(bcrypt.compareSync(req.body.password,admin.password)){
            res.send({
                _id:admin._id,
                name:admin.name,
                email:admin.email,
                isAdmin:admin.isAdmin,
                token:generateToken(admin)
            });
            return;
        }
    }
    res.status(401).send({message: "Invalid email or password"});
}))


export default adminRouter;