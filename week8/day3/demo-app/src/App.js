import logo from './logo.svg';
import './App.css';
import React from 'react';



class App extends React.Component{
  constructor(){
    super();
    this.state = {
      isToggleOn:true,
      username:''
    }
  }


     clickHandler = () => {
       alert('I was clicked')

      }

     handleKeyPress = (event) => {
      alert(`your Enter key was pressed: ${event.target.value}`)
    }

     check = (e) =>{
      if (e.target.textContent === 'ON') {
        e.target.textContent = 'OFF'
        this.setState({isToggleOn:false})
        console.log('Toggloff')
      } else {
        e.target.textContent = 'ON'
        this.setState({isToggleOn:true})
        console.log('isToggon')
      }
    }
    handleSubmit = (e) => {
      e.preventDefault()
      alert(`your name ${this.state.username}`)
    }

    render(){
    return(
      <>
      
       <button onClick={this.clickHandler}>Click Me!</button> <br /> 
      <button onClick={this.check}>Click Me!</button> <br />
       <input type="text" onKeyPress={this.handleKeyPress} placeholder='press the ENTER key!'></input> <br/> 
       <form>
         
         <p>enter your name:</p>
         <input type="text" onSubmit={this.handleSubmit}></input>
         <h1>hello{this.hedar}{this.state.username}</h1>

      </form> 
      </>
    )

  }

 }
    
export default App;

