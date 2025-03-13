import "./css/App.css";
import { Routes, Route } from "react-router-dom";

import { MovieProvider } from "./contexts/MovieContext";

import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <MovieProvider>
        <div>
          <NavBar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/favorites" element={<Favorites />} />
            </Routes>
          </main>
        </div>
      </MovieProvider>
    </>
  );
}

export default App;
