// App.js
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import "./App.css";
import RecipeDetail from "./pages/RecipeDetail";
import MyFavorite from "./pages/MyFavorite";

function App() {
 
  return (
    <>
       <Routes>
          <Route index element={<Home />} />
          <Route path='recipes/:id' element={<RecipeDetail />} />
          <Route path='MyFavorite' element={<MyFavorite />} />
      </Routes>
    </>
  );
}

export default App;
