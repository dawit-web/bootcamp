import React from 'react';
 import './My.css';
// import'./App.css';

// const myStyle= {
//   color:'white',
//   backgroundcolor: 'DodgerBlue',
//   padding:'10px',
//   fontfamily:'Arial'
// }

const mySuperStyles={
  color: 'yellow',
  sizefont: '16px',
  weightfont: 'bold',
  border: '1px solid yellow',
  backgroundcolor:'black',
  padding: '5px',
  border:'radius 8px',
  cursor: 'pointer',
  margin: '10px'

}

const MyComponent = () => {
  
  return (
    
   <div>
    <h1>hello style!</h1>
    <button style={mySuperStyles}>i'm a stylish button</button>
  </div>

   


    // <div>
    //   <h1>this is a Header</h1>

    //   <p>this is a paragraph</p>
           
    //   <a href="#">this is a link"</a>

    //   <h2>this is a Form</h2>
    
    //   <input type="text" value=""/>
  
    //   <button>submit</button>

    //   <h6>Here is a image:</h6>
    //   <img src='https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png?size=200x200'>
    // <ul>
    //   <li>coffe</li>
    //   <li>tea</li>
    //   <li>milk</li>
    // </ul>
     
    // </div>
  )
}

export default MyComponent;