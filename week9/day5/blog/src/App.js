import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import { BrowserRouter,Routes ,Route} from "react-router-dom";
import Post from './components/Post';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>    
        
          <Route exact path='/'element={<Home/>}/>
          <Route path='/about' element={<About />} />
          <Route path='/contact'element={<Contact/>} />
          <Route path='/:post_id' element={<Post/>} />
        </Routes>  
      </BrowserRouter>
    );
}

export default App;
