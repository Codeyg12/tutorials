import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import RecipePage from './pages/RecipePage'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path='/recipes/:recipeId' element={<RecipePage />} />
      <Route path='*' element={<p>This page doesn't exist!</p>} />
    </Routes>
    </>
  )
}

export default App
