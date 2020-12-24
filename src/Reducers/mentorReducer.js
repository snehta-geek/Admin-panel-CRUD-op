import { ADD_MENTOR_SUCCESS, ADD_MENTOR_FAIL, MENTOR_PROFILE_RESET, MENTOR_UPDATE_PROFILE_SUCCESS, MENTOR_UPDATE_PROFILE_FAIL, MENTOR_UPDATE_PROFILE_RESET, MENTOR_DETAILS_SUCCESS, MENTOR_DETAILS_FAIL, REMOVE_MENTOR, SHOW_MENTOR_SUCCESS, SHOW_MENTOR_FAIL } from "../Constants/mentorConstant";

export const mentorAddReducer = (state = {}, action) => {
    switch (action.type) {     
      case ADD_MENTOR_SUCCESS:
        return {  mentorInfo: action.payload,success: true  };
      case ADD_MENTOR_FAIL:
        return { error: action.payload };
        case MENTOR_PROFILE_RESET:
            return {};
           
      default:
        return state;
    }
  };

  export const showMentorReducer = (state = { mentors: [] }, action) => {
    switch (action.type) {    
      case SHOW_MENTOR_SUCCESS:
        return { loading: false, mentors: action.payload };
      case SHOW_MENTOR_FAIL:
        return { loading: false, error: action.payload };
        case REMOVE_MENTOR:
          return {
              ...state,
              mentors: state.mentors.filter(x => x._id !== action.payload)      
          };
      default:
        return state;
    }
  }
  export const mentorDetailsReducer = (state = { loading: true }, action) => {
    switch (action.type) {     
      case MENTOR_DETAILS_SUCCESS:
        return { loading: false, mentor: action.payload };
      case MENTOR_DETAILS_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  }

  export const mentorUpdateProfileReducer = (state = {}, action) => {
    switch (action.type) {
     
      case MENTOR_UPDATE_PROFILE_SUCCESS:
        return { loading: false, success: true };
      case MENTOR_UPDATE_PROFILE_FAIL:
        return { loading: false, error: action.payload };
        case MENTOR_UPDATE_PROFILE_RESET:
        return {};
      default:
        return state;
    }
  }

 