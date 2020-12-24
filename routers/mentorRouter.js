import express from "express";
import Mentor from "../models/mentorModel.js";
import expressAsyncHandler from "express-async-handler";
import adData from "../admin.js";

const mentorRouter=express.Router();

mentorRouter.get('/',expressAsyncHandler(async(req,res) => {
    const mentors=await Mentor.find({});
    res.send(mentors);
}))
mentorRouter.get("/seed",expressAsyncHandler(async(req,res) =>{
    const createdMentors=await Mentor.insertMany(adData.mentors);
    res.send({createdMentors});

}));

mentorRouter.post('/add-mentor',expressAsyncHandler(async(req,res) => {
    const mentor=new Mentor({
        name:req.body.name,
        field:req.body.field,
        designation:req.body.designation,     
    });
    const createdMentor=await mentor.save();
    res.send({
        _id:createdMentor._id,
        name:createdMentor.name,
        field:createdMentor.field,
        designation:createdMentor.designation,
       
    });
}));



mentorRouter.get('/:id',expressAsyncHandler(async(req,res) =>{
    const mentor=await Mentor.findById(req.params.id);
    if(mentor)
    {
        res.send(mentor);
    }
    else{
        res.status(404).send({message: "Mentor Not Found"});
    }
}));

mentorRouter.put('/profile' , expressAsyncHandler(async(req,res) =>{
    const mentor= await Mentor.findById(req.mentor._id);
    if(mentor){
        mentor.name= req.body.name || mentor.name;
        mentor.field= req.body.field || mentor.field;
        mentor.designation= req.body.designation || mentor.designation;
        

        const updatedMentor= await mentor.save();

        res.send({
            _id: updatedMentor._id,
           name: updatedMentor.name,
            field: updatedMentor.field,
           designation: updatedMentor.designation,
           
        });
        

    }
}))
export default mentorRouter;