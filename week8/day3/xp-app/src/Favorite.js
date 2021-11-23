import React from "react";

class Favorite extends React.Component{
    constructor(){
        super();
        this.state= {
            favoriteColor:'red'
        }
    }
    componentDidMount(){
        setTimeout(() =>{
            this.setState({favoriteColor:'yellow'})
        }, 5000);
    }

    handleclick = () =>{
        this.state({favoriteColor:'blue'});
    }

    render(){
        return(
            <div>
                <h1>My Favorite Color is {this.state.favoriteColor}</h1>
                <button onClick={this.handleclick}>click</button>
            </div>
        )
    }
}

export default Favorite