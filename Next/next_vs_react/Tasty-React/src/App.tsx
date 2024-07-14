import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import RecipePage from "./pages/RecipePage";
import Navbar from "./components/ui/navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipes/:recipeId" element={<RecipePage />} />
        <Route path="*" element={<p>This page doesn't exist!</p>} />
      </Routes>
    </>
  );
}

export default App;
