import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showMentors, removeMentor } from "./Actions/mentorAction";
import MessageBox from "./MessageBox";
const MentorScreen=() =>{
    const dispatch=useDispatch();
    const showMentor=useSelector((state) => state.showMentor);  
    const {error,mentors}=showMentor;
     useEffect(() =>{
         dispatch(showMentors());          
     },[dispatch]);

     const removeMentorHandler=(id) => {
        dispatch(removeMentor(id));
    }
  
    return (
        <>      
        {error ? (
               <MessageBox variant="danger">{error}</MessageBox>
      	      ) : (
        <div className="row">
            {mentors.map((val) => {
                return(
                 
                    <div className="card">
                         <h2>Mentor</h2>
                         <button className="dlt-btn" onClick={()=>
                     removeMentorHandler(val._id)}>X</button>
            <form className="back">                
<div className="field">
                <label htmlFor="name">Name</label>
               <span className="value">{val.name}</span>
               </div>

               <div className="field">
                <label htmlFor="field">Field</label>
                <span className="value">{val.field}</span>
</div>
<div className="field">
                <label htmlFor="desig">Designation</label>
                <span className="value">{val.designation}</span>
                </div>
                </form>
                </div>
                )
                 })}
                </div>
                )}
  
        </>
    )
}

export default MentorScreen;