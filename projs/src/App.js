import logo from './logo.svg';
import './App.css';
import Accordian from './components/accordian/Accordian';
import RandomColor from './components/random-color/RandomColor';
import StarRating from './components/star-rating/StarRating';
import ImageSlider from './components/image-slider/ImageSlider';

function App() {
  return ( 
    <div className="App">
      {/* <Accordian /> */}
      {/* <RandomColor /> */}
      {/* <StarRating numOfStars={7} /> */}
      <ImageSlider url={'https://picsum.photos/v2/list'} />
    </div>
  );
}

export default App;
