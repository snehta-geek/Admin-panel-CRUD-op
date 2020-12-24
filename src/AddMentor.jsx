import React,{ Component }  from "react";
import MentorCard from "./components/MentorCard";

class AddMentor extends Component  {
    constructor(props) {
        super(props);
        
        this.state = {
            card: [],
            

        };
    }
        addCard = () => {
            this.setState({
                card: [...this.state.card, <MentorCard/>],
               
               
            })
    
        }
    
        render() {
    return(
        <>
         <div className="add_lists">
                    <button onClick={this.addCard} className="add">+</button>
                    
                    <span>{this.state.card}</span>
                   
               
                </div>
        </>
    )
}
    
}


export default AddMentor;