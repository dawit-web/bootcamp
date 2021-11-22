import logo from './logo.svg';
import './App.css';
import BootstrapCard from './components/Dylan';
import Car from './components/Car';
import Garage from './components/Garage';
import Phone from './components/Phone';

// function PrintHello() {
//   return (
//     <div className="App">
//       <h1>i Love React</h1>
      
//       <BootstrapCard/>
//     </div>
//   );
// }

// export default PrintHello;


function App() {
  return (
    <div>
      <Car />
      <Phone/>
      
    </div>

          
    
  );
}

export default App;

