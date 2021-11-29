import React from "react";
import { connect } from "react-redux";
import {plusOne, minusOne} from './redux/actions'

class Count extends React.Component{
    // constructor(){
    //     super();
    //     // this.state ={
    //     //     counter:0
    //     // }

    // }

    // plusOne = () => {
    //     this.setState({counter:++this.state.counter})
    // }

    // minusOne = () => {
    //     this.setState({counter:this.state.counter -1})
    // }

    render(){
        // const{counter} = this.state
            return(
            <>   
                <h2>{this.props.counter}</h2>       
                <button onClick={this.props.handelplusOne}>plus</button>
                <button onClick={this.props.handelminusOne}>minus</button>
            </>
        )
    } 
}


  const mapStateToProps =(state) => {
    return {
        counter:state.counter
    }
  }

    const mapDispatchToProps = (dispatch) => {
        return {
            handelplusOne: (e) => dispatch(plusOne(e.target.value)),
            handelminusOne: (e) => dispatch(minusOne(e.target.value))
        }
    }

export default connect(mapStateToProps, mapDispatchToProps)(Count);
