import React from "react";

class Phone extends React.Component{
    constructor(){
        super();
        this.state ={
            brand: "Samsung",
            model: "Galaxy S20",
            color: "black",
            year: 2020
        };
    }

    render(){
        return(
            <di>
                 <h1>My phone is a {this.state.brand}</h1>
                 <h4>is a {this.state.color} {this.state.model} from {this.state.year} </h4>
                 <button onClick={this.changeColor}>change color</button>
            </di>
        )
    }
}

export default Phone