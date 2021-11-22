import logo from './logo.svg';
import './App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';



function App() {
  return (
    <Carousel>
    <div>
        <img src="https://london.ac.uk/sites/default/files/styles/max_1300x1300/public/2018-10/london-aerial-cityscape-river-thames_1.jpg?itok=6LenFxuz"/>
        <p className="legend">london </p>
    </div>
    <div>
        <img src="https://media-cdn.tripadvisor.com/media/photo-s/0e/9a/e3/1d/freedom-tower.jpg"/>
        <p className="legend">new york</p>
    </div>
    </Carousel>
  


  );
}

export default App;


