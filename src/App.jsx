import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header' // Her henter vi din nye komponent!
import Trends from './pages/trends'
import BoernePanel from './pages/boernePanel'
import './App.css'
import './styles/typografi.css';
import './styles/buttons.css';

function App() {
  return (
    <BrowserRouter>
      {/* Her indsætter vi Header-komponenten (som indeholder menuen) */}
      <Header />

      {/* <main> fortæller browseren, at her kommer sidens hovedindhold */}
      <main className="content-container">
        <Routes>
          <Route path="/" element={<Trends />} />
          <Route path="/boernepanel" element={<BoernePanel />} />
        </Routes>
      </main>

    </BrowserRouter>
  )
}

export default App