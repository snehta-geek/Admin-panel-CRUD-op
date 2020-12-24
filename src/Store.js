// const { adminSigninReducer } = require("./Reducers/adminReducer");
import {
    combineReducers,compose,createStore,applyMiddleware
} from "redux";
import thunk from "redux-thunk";
import { adminSigninReducer } from "./Reducers/adminReducer";
import { mentorAddReducer, mentorUpdateProfileReducer, mentorDetailsReducer, showMentorReducer } from "./Reducers/mentorReducer";

const initialState={
   adminSignin: {
        userInfo: localStorage.getItem('adminInfo')
          ? JSON.parse(localStorage.getItem('adminInfo'))
          : null,
      },
      mentorAdd: {
          mentorInfo: localStorage.getItem('mentorInfo')
          ? JSON.parse(localStorage.getItem('mentorInfo'))
          : null,
      }
};
const rootReducer=combineReducers({
    adminSignin:adminSigninReducer,
    mentorAdd:mentorAddReducer,
    showMentor: showMentorReducer,
    mentorUpdateProfile:mentorUpdateProfileReducer,
    mentorDetails:mentorDetailsReducer,

})
const composeEnhancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=createStore(rootReducer,initialState,composeEnhancer(applyMiddleware(thunk)));

export default store;