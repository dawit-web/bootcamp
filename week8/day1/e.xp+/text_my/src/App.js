import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent';


function App() {
  // return <h1>I love JSX!</h1>;
  // return React.createElement('div', null, `I do not use JSX!`);
  // <h1>React is {sum} times better with JSX</h1>;
  return (
    <div>
      <MyComponent/>
    </div>
  )



  // return (
  //   <>
  //     <ul>
  //       <li>Apples</li>
  //       <li>Bananas</li>
  //       <li>Cherries</li>
  //     </ul>
  //   </>
  // );
  // return (
  //   <>
  //     <h1>I am a Header.</h1>
  //     <h1>I am a Header too.</h1>
  //   </>
  // );
  // return (
  //   <>
  //     <form><input></input></form>
  //   </>
  // );
  // return (
  //   <h1>
  //     {name} is {age} years old
  //   </h1>
  // );
}

export default App;