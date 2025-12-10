import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Trends from './pages/trends' // Husk at tjekke om filnavnet er med stort T eller lille t
import BoernePanel from './pages/boernePanel'
import TrendProfil from "./pages/TrendProfil" ;
import BarnProfil from './pages/BarnProfil'; // <--- NY IMPORT
import './App.css'
import './styles/typografi.css';
import './styles/buttons.css';

function App() {
  return (
    <BrowserRouter>
      <Header />

      <main className="content-container">
        <Routes>
          <Route path="/" element={<Trends />} />
          <Route path="/boernepanel" element={<BoernePanel />} />
          
          {/* --- DU MANGLEDE DENNE LINJE: --- */}
          <Route path="/trend/:id" element={<TrendProfil />} />
          <Route path="/barn/:id" element={<BarnProfil />} />
        </Routes>
      </main>

    </BrowserRouter>
  )
}

export default App