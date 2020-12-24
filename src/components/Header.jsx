import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { signout } from "../Actions/adminAction";

const Header = () => {
    const adminSignin = useSelector(state => state.adminSignin);
    const { adminInfo } = adminSignin;
    const dispatch = useDispatch();
    const sigoutHandler = () => {
        dispatch(signout());
    }
    return (
        <>
            <div className="navbar">
                <h1>Expertrons</h1>
               
                
                {adminInfo && adminInfo.isAdmin ? (
                    <div className="dropdown">
                        <Link to="/">
                            Admin <i className="fa fa-caret-down"></i>
                        </Link>
                        <ul className="dropdown-content">
                        <li>
                                <Link to="/mentor-details"> Mentor Profile</Link>
                            </li>
                            <li>
                                <Link to="/signout" onClick={sigoutHandler}>Sign Out</Link>
                            </li>
                            {/* <li>
                                <Link to="/update">Update Mentor Profile</Link>
                            </li> */}
                        </ul>
                    </div>
                ) :
                (
                    <a href="/">Sign In</a>
                )}
              
                {/* <div className="nav-items">
        <div className="nav-item"> <a href="">About Us</a></div>
        <div className="nav-item"><a href="">Sign Up</a></div>
        <div className="nav-item"><a href="">Sign In</a></div>
        </div> */}
            </div>
        </>
    )
};

export default Header;