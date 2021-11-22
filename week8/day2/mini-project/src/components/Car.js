import React from "react";
import Garage from "./Garage";
// import Phone from './components/Phone';


class Car extends React.Component{
    constructor(){
        super();
        this.state = {
            color:'red'

        }
    }
    render() {
        
        return (
            <div>
                <h2>Hi, I am a{ this.state.color} Car!</h2>
                <Garage/>
             
            </div>
            
        )
    }

   
      
    

}

export default Car 