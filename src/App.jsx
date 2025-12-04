import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Trends from './pages/Trends'
import BoernePanel from './pages/BoernePanel'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      
      {/* --- HER ER DIN MENU (NAVIGATION) --- */}
      <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
        {/* Link fungerer ligesom <a> tags, men uden at genindlæse siden */}
        <Link to="/" style={{ marginRight: '20px' }}>Trends (Forside)</Link>
        <Link to="/BoernePanel">Børnepanel</Link>
      </nav>

      {/* --- HER STYRER VI SIDERNE --- */}
      <div style={{ padding: '2rem' }}>
        <Routes>
          {/* Når stien er "/", vis Trends-komponenten */}
          <Route path="/" element={<Trends />} />
          
          {/* Når stien er "/boernepanel", vis BoernePanel-komponenten */}
          <Route path="/BoernePanel" element={<BoernePanel />} />
        </Routes>
      </div>

    </BrowserRouter>
  )
}

export default App