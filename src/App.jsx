import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Trends from './pages/Trends';         // Husk stort T i filnavnet hvis du ændrede det
import BoernePanel from './pages/BoernePanel'; // Husk stort B
import TrendProfil from './pages/TrendProfil'; // <--- NY: Vi henter undersiden her
import './App.css';
import './styles/typografi.css';
import './styles/buttons.css';

function App() {
  return (
    <BrowserRouter>
      
      <Header />

      <main className="content-container">
        <Routes>
          {/* Forsiden */}
          <Route path="/" element={<Trends />} />
          
          {/* Børnepanel siden */}
          <Route path="/boernepanel" element={<BoernePanel />} />
          
          {/* NY RUTE: Undersiden for en trend */}
          {/* :id betyder at den griber alt der står efter skråstregen (f.eks. 1, 2, 55) */}
          <Route path="/trend/:id" element={<TrendProfil />} />
        </Routes>
      </main>

    </BrowserRouter>
  )
}

export default App;