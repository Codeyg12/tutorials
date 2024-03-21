import './App.css';
import Accordian from './components/accordian/Accordian';
import RandomColor from './components/random-color/RandomColor';
import StarRating from './components/star-rating/StarRating';
import ImageSlider from './components/image-slider/ImageSlider';
import LoadMore from './components/load-more/LoadMore';
import TreeView from './components/tree-view/TreeView';
import menus from './components/tree-view/data';
import QrGenerator from './components/qr-generator/QrGenerator';
import ThemeSwitch from './components/theme-switch/ThemeSwitch';

function App() {
  return ( 
    <div className="App">
      {/* <Accordian /> */}
      {/* <RandomColor /> */}
      {/* <StarRating numOfStars={7} /> */}
      {/* <ImageSlider url={'https://picsum.photos/v2/list'} /> */}
      {/* <LoadMore /> */}
      {/* <TreeView menus={menus} /> */}
      {/* <QrGenerator /> */}
      <ThemeSwitch />
    </div>
  );
}

export default App;
