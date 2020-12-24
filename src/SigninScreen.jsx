import React, { useState, useEffect } from "react";
import {useSelector,useDispatch} from "react-redux";
import { signin } from "./Actions/adminAction";
import { Link } from "react-router-dom";
import MessageBox from "./MessageBox";

const SigninScreen =(props) =>{
    const dispatch= useDispatch();
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const adminSignin=useSelector(state =>state.adminSignin);
    const {adminInfo,error}=adminSignin;

    const redirect=props.location.search ?
    props.location.search.split('=')[1] :
    "/add-mentor";

    const submitHandler=(e) =>{
        e.preventDefault();
        dispatch(signin(email,password));
    }

    useEffect(()=>{
        if(adminInfo){
            props.history.push(redirect);
        }
    },[adminInfo,props.history,redirect]);
    return (
        <>
         <div className="login-container">
                <h2>Sign in</h2>   
                {error && <MessageBox variant="danger">{error}</MessageBox>} 
                <form onSubmit={submitHandler} className="sform">
               
                    <label htmlFor="email">E-mail</label>
                    <input type="email" 
                    id="email"                    
                    required 
                    className="input"
                    onChange={e => setEmail(e.target.value)} />

                    <label htmlFor="password">Password</label>
                    <input type="password" 
                    id="password"                     
                    required 
                    className="input"
                    onChange={e => setPassword(e.target.value)} />
                    
                  
                    <button type="submit" className="btn-login">Sign in</button>
                   
                </form>

               
            </div>
        </>
    )
}

export default SigninScreen;