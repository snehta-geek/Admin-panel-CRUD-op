import React, { useState, useEffect } from "react";
import { updateMentorProfile, detailsMentor } from "../Actions/mentorAction";
import MessageBox from "../MessageBox";
import { useSelector, useDispatch } from "react-redux";
import { MENTOR_UPDATE_PROFILE_RESET } from "../Constants/mentorConstant";

const UpdateMentor = (props) => {
    const { mentorData } = props;
    const [name, setName] = useState('');
    const [field, setField] = useState('');
    const [designation, setDesignation] = useState('');

    const mentorAdd = useSelector(state => state.mentorAdd);
    const { mentorInfo } = mentorAdd;
    const mentorDetails = useSelector(state => state.mentorDetails);
    const { error, mentor } = mentorDetails;
    const mentorUpdateProfile = useSelector(state => state.mentorUpdateProfile);
    const { error: errorUpdate, success: successUpdate } = mentorUpdateProfile;
    const dispatch = useDispatch();
    useEffect(() => {
        if(!mentor) {
            dispatch({type:MENTOR_UPDATE_PROFILE_RESET});
            dispatch(detailsMentor(mentorInfo._id));
        }
        else{
            setName(mentor.name);
            setField(mentor.email);
            setDesignation(mentor.designation);
        }
        
    }, [dispatch, mentorInfo._id,mentor]);
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(updateMentorProfile({ mentorId: mentorInfo._id, name, field, designation }));

    }
    return (
        <>
            <div className="card">
                <h2>Mentor Profile</h2>
                {error ? <MessageBox variant="danger">{error}</MessageBox>
                :
                <form onSubmit={submitHandler} className="back">

                    {successUpdate && (
                        <MessageBox variant="success">
                            Mentor Profile Updated Successfully!!!</MessageBox>
                    )} :
                           {errorUpdate && (
                        <MessageBox variant="error" >{errorUpdate}</MessageBox>
                    )}

                    <div className="field">
                        <label htmlFor="name">Name</label>
                        <input type="name"
                            id="name"
                            required
                            value={name}
                            onChange={e => setName(e.target.value)} />
                    </div>

                    <div className="field">
                        <label htmlFor="field">Field</label>
                        <input type="field"
                            id="field"
                            required
                            value={field}
                            onChange={e => setField(e.target.value)} />
                    </div>

                    <div className="field">
                        <label htmlFor="desig">Designation</label>
                        <input type="designation"
                            id="designation"
                            required
                            value={designation}
                            onChange={e => setDesignation(e.target.value)} />
                    </div>


                    <button type="submit" className="btn-login">Update</button>
                </form>
}
            </div>
        </>

    )
}

export default UpdateMentor;