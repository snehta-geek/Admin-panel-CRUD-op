import React, { useState, useEffect } from "react";
import MessageBox from "../MessageBox";
import { useDispatch, useSelector } from "react-redux";
import { addMentor, removeMentor} from "../Actions/mentorAction";
import { MENTOR_PROFILE_RESET } from "../Constants/mentorConstant";
import UpdateMentor from "./UpdateMentor";

const MentorCard = () => {
    const [name, setName] = useState('');
    const [field, setField] = useState('');
    const [designation, setDesignation] = useState('');
    const dispatch = useDispatch();

    const mentorAdd = useSelector((state) => state.mentorAdd);
    const { mentorInfo, error,success } = mentorAdd;

    const submitHandler = (e) => {
        e.preventDefault();
        setName('');
        setField('');
        setDesignation('');
        dispatch(addMentor(name, field, designation));
        // dispatch({type:MENTOR_PROFILE_RESET});
       

    }
    

    return (
        <>
            <div className="card">
                <h2>Mentor</h2>
                
                {success ? (
                        <MessageBox variant="success">
                            Mentor Added Successfully!!!</MessageBox>
                    ) :
                                         (
                        <MessageBox variant="error" >{error}</MessageBox>
                    )}
                <form onSubmit={submitHandler} className="back">

                    

                    <label htmlFor="name">Name</label>
                    <input type="name"
                        id="name"
                        required    
                        className="input"                   
                        onChange={e => setName(e.target.value)} />

                    <label htmlFor="field">Field</label>
                    <input type="field"
                        id="field"
                        required
                        className="input"
                        onChange={e => setField(e.target.value)} />

                    <label htmlFor="desig">Designation</label>
                    <input type="designation"
                        id="designation"
                        required
                        className="input"
                        onChange={e => setDesignation(e.target.value)} />


                    <button type="submit" className="btn-login">Add Mentor</button>

{/* <UpdateMentor mentorData={mentorInfo}/> */}
                </form>
            </div>
        </>

    )
}

export default MentorCard;