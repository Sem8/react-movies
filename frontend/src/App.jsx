import './css/App.css'
import {Routes, Route} from 'react-router-dom'

import Home from "./pages/Home"
import Favorites from './pages/Favorites'
import NavBar from './components/NavBar'

function App() {

  return (
    <>
    <div>
      <NavBar />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
      
    </main>
    </div>
    </>
  );
}

export default App
