
import React from "react";
import Header from "./components/Header";
import SigninScreen from "./SigninScreen";
import {Route,Switch} from "react-router-dom";
import MentorCard from "./components/MentorCard";
import UpdateMentor from "./components/UpdateMentor";
import AddMentor from "./AddMentor";
import MentorScreen from "./MentorScreen";

function App() {
  return (
    <>
      <Header/>

   <Switch>
<Route exact path="/" component={SigninScreen}/>
<Route exact path="/add-mentor" component={AddMentor}/>
<Route exact path="/mentor" component={MentorCard}/>
<Route exact path="/update" component={UpdateMentor}/>
<Route exact path="/mentor-details" component={MentorScreen}/>
   </Switch>
    </>
  );
}

export default App;
