
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/Navbar';
import Favorite from './components/Favorite';
import { BrowserRouter,Routes ,Route} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>    
        
          <Route exact path='/'element={<Home/>}/>
          <Route path='/Favorite' element={<Favorite/>} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Register' element={<Register/>} />
               
        </Routes>  
      </BrowserRouter>
    );
}

export default App;


// <Route path='/Favorite' element={<Favorite/>} />
// <Route path='/contact'element={<Contact/>} />

    // {/* <div style={{ 
    //         backgroundImage: url( + /river.jpg'}),
    //         backgroundRepeat: 'no-repeat',
    //         width:'250px' 
    //       }}>
    //       </div> */}



     
    // <Card style={{ width: '28%',   display:"inline-block" , textAlign:"center"}}>
    // {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
    // <Card.Body>
    // <Card.Title style={{ textTransform:"capitalize"}}> <h4> {name}</h4></Card.Title>
    // < hr/>
    // <Card.Text>
    // <h6>calories: {calories}</h6>
    //     <h6>cholesterol_mg: {cholesterol_mg}</h6>
    //     <h6>carbohydrates_total_g: {carbohydrates_total_g}</h6>
    //     <h6>fat_saturated_g: {fat_saturated_g}</h6>
    //     <h6>fat_total_g: {fat_total_g}</h6>
    //     <h6>fiber_g: {fiber_g}</h6>
       
    //     <h6>protein_g: {protein_g}</h6>
    //     <h6>potassium_mg: {potassium_mg}</h6>
    //     <h6>sodium_mg: {sodium_mg}</h6>
    //     <h6>sugar_g: {sugar_g}</h6>
    // </Card.Text>
    // <Button variant="primary"  onClick={saveinput}>Save</Button>
    // </Card.Body>
    // </Card>
    