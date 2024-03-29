import "./App.css";
import Accordian from "./components/accordian/Accordian";
import RandomColor from "./components/random-color/RandomColor";
import StarRating from "./components/star-rating/StarRating";
import ImageSlider from "./components/image-slider/ImageSlider";
import LoadMore from "./components/load-more/LoadMore";
import TreeView from "./components/tree-view/TreeView";
import menus from "./components/tree-view/data";
import QrGenerator from "./components/qr-generator/QrGenerator";
import ThemeSwitch from "./components/theme-switch/ThemeSwitch";
import ScrollIndicator from "./components/scroll-indicator/ScrollIndicator";
import TabTest from "./components/tabs/TabTest";
import ModalTest from "./components/modal/ModalTest";
import GithubFinder from "./components/github-finder/GithubFinder";
import Autocomplete from "./components/autocomplete/Autocomplete";
import TicTacToe from "./components/tic-tac-toe/TicTacToe";
import FeatureFlagGlobal from "./components/feature-flag/context/FeatureFlagContext";
import FeatureFlag from "./components/feature-flag/FeatureFlag";
import TestFetch from "./components/use-fetch/TestFetch";
import TestOutsideClick from "./components/use-onclick-outside/TestOutsideClick";
import TestResponsive from "./components/use-responsive/TestResponsive";
import ScrollTopBottom from "./components/top-and-bottom/ScrollTopBottom";
import ScrollToSection from "./components/scroll-to-section/ScrollToSection";

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
      {/* <ThemeSwitch /> */}
      {/* <ScrollIndicator url={'https://dummyjson.com/products?limit=100'} /> */}
      {/* <TabTest /> */}
      {/* <ModalTest /> */}
      {/* <GithubFinder /> */}
      {/* <Autocomplete /> */}
      {/* <TicTacToe /> */}
      {/* <FeatureFlagGlobal>
        <FeatureFlag />
      </FeatureFlagGlobal> */}
      {/* <TestFetch /> */}
      {/* <TestOutsideClick /> */}
      {/* <TestResponsive /> */}
      {/* <ScrollTopBottom /> */}
      <ScrollToSection />
    </div>
  );
}

export default App;
