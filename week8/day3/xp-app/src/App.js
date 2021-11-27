import logo from './logo.svg';
import './App.css';
import React from 'react';


class App extends React.Component{
      constructor(){
        super();
        this.shootRegular = this.shootRegular.bind(this); 
          
        }
      

      shootRegular() {
        alert(this)
      }

      shootRegularWithParameter(hi){
        alert(hi)
      }

      shootWithArgument(ho) {
        alert(ho)
      }

      shootTwo= () => {
        alert(this)
      }
    
      render(){
        return(
          <div>
             <button onClick={this.shootRegular}>Keep Shooting!</button>
             <button onClick={this.shootRegularWithParameter.bind(this, 'pass!')}>Shooting!</button>
             <button onClick={ this.shootWithArgument('Goal')}>Goal</button>
             <button onClick={this.shootTwo}>obj</button>
          </div>
        )

     } 
    
}

export default App;
