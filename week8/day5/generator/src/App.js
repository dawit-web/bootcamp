import logo from './logo.svg';
import './App.css';
import React from 'react';
import quotes from './components/Quotes';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      quote: quotes[0].quote,
      author:quotes[0].author
    }
  }

  genetQuote = () => {
    const num = Math.floor(Math.random() * quotes.length)
    console.log(quotes[num])
    this.setState({quote: quotes[num].quote,author:quotes[num].author})

    const randomColor = Math.floor(Math.random()*478687);
    document.body.style.backgroundColor = '#' + randomColor;
    document.body.querySelector('div').style.color = '#' + randomColor;
    document.body.querySelector('button').style.backgroundColor = '#' + randomColor;
     document.body.querySelector('div').style.backgroundColor ='white'
    
  } 



  render(){
    
    
  return (
    <div>
    <h2>"{this.state.quote}
    {this.state.author}"</h2>
    <br/>
    <button onClick={this.genetQuote}>Click Me!</button>
    </div>
  );

  }

}

export default App;
