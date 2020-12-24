import {
    ADMIN_SIGNIN_REQUEST,
    ADMIN_SIGNIN_SUCCESS,
    ADMIN_SIGNIN_FAIL,
    ADMIN_SIGNOUT
} from "../Constants/adminConstant";
import Axios from "axios";

export const signin=(email,password) => async(dispatch) => {
    dispatch({type:ADMIN_SIGNIN_REQUEST,payload:{email,password}})
    try{
        const {data}=await Axios.post('/api/admin/signin', {email,password});
        dispatch({type: ADMIN_SIGNIN_SUCCESS, payload: data});
        localStorage.setItem('adminInfo', JSON.stringify(data));
    }
    catch (error) {
        dispatch({
            type: ADMIN_SIGNIN_FAIL,
            payload:
                error.response && error.response.data.message ?
                    error.response.data.message : error.message
        });
    }
}

export const signout = () => (dispatch) => {
    dispatch({ type: ADMIN_SIGNOUT });
    localStorage.removeItem('adminInfo');
}