import express from "express";
import mongoose from "mongoose";
import adminRouter from "./routers/adminRouter.js";
import mentorRouter from "./routers/mentorRouter.js";

const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost:27017/adminDB',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
})
.then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));


    app.use('/api/admin',adminRouter);
    app.use('/api/mentors',mentorRouter);

app.use((err,req,res,next) =>{
    res.status(500).send({message:err.message});
})

const port = process.env.PORT || 5050;
app.listen(port,()=>console.log("server started...."));