import React from 'react';
import Button from './components/Button';
import quotes from './components/quotes.js';


class App extends React.Component {
 constructor(){
     super();
     console.log(quotes)
     this.state= {
        quote:'',
        // selectoedQuoteIndex:'',
     }

 }

 componentDidMount() {
    console.log('ss',quotes)
   
 }


render(){
    console.log('ss',quotes)
  return ( 
      <div className ="App" id="quote-box">
        <button>find</button>
      </div>

    );
  }
}

export default App;