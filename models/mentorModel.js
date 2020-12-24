import mongoose from "mongoose";

const mentorSchema =new mongoose.Schema({
    name: {type:String,required:true},
    field: {type:String,required:true},
    designation: {type:String,required:true},
   
},
{
    timestamps:true
});

const Mentor= mongoose.model('Mentor',mentorSchema);

export default Mentor;