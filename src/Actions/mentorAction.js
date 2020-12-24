import { ADD_MENTOR_SUCCESS, ADD_MENTOR_FAIL, MENTOR_UPDATE_PROFILE_SUCCESS, MENTOR_UPDATE_PROFILE_FAIL, MENTOR_DETAILS_SUCCESS, MENTOR_DETAILS_FAIL, REMOVE_MENTOR, SHOW_MENTOR_SUCCESS, SHOW_MENTOR_FAIL } from "../Constants/mentorConstant";
import Axios from "axios";

export const addMentor = (name, field, designation) => async (dispatch) => {
    
    try {
      const { data } = await Axios.post('/api/mentors/add-mentor', {
        name,
        field,
       designation,
      });
      dispatch({ type: ADD_MENTOR_SUCCESS, payload: data });
      localStorage.setItem('mentorInfo', JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: ADD_MENTOR_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

  export const showMentors=()=> async(dispatch)=>{
  
    try{
        const {data}=await Axios.get('/api/mentors');
        dispatch({
            type:SHOW_MENTOR_SUCCESS,payload:data
        });
    }catch(error){
        dispatch({
            type:SHOW_MENTOR_FAIL,payload:error.message
        });
    }
}

  export const detailsMentor =(mentorId) => async(dispatch) =>{
    
    try{
      const {data}= await Axios.get(`/api/mentors/${mentorId}`)             //await uses to get real data of ajax req
    
      dispatch({type: MENTOR_DETAILS_SUCCESS, payload: data})
    }
    catch(error)
    {
      dispatch({type:MENTOR_DETAILS_FAIL,
         payload:
        error.response && error.response.data.message ?
        error.response.data.message : error.message})
    }
  }

  export const updateMentorProfile =(mentor) =>async(dispatch) =>{
    
    try{
      const  {data}= await Axios.put(`/api/mentors/profile`,mentor, 
      );
      dispatch({type:MENTOR_UPDATE_PROFILE_SUCCESS, payload:data});
      localStorage.setItem('mentorInfo', JSON.stringify(data));
    }
    catch(error){
      dispatch({type:MENTOR_UPDATE_PROFILE_FAIL, payload:
        error.response && error.response.data.message ?
        error.response.data.message : error.message})
    }
    }

    export const removeMentor = (mentorId) => (dispatch,getState) => {
      dispatch({
          type:REMOVE_MENTOR,
          payload:mentorId
      })
      // localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems));
  };