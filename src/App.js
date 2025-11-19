import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CacheSimulator from './CacheSimulator';
import CacheSimulatorAB from './CacheSimulatorAB';
import GuiaMigracion from './GuiaMigracion';
import Diagrama from './diagrama';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 p-4">
        {/* Barra de navegación */}
        <nav className="flex gap-4 mb-6 bg-white shadow p-4 rounded">
          <Link 
            to="/" 
            className="text-blue-600 font-semibold hover:underline"
          >
            🧠 Simulador V1–V3
          </Link>
          <Link 
            to="/ab" 
            className="text-blue-600 font-semibold hover:underline"
          >
            ⚙️ Simulador A vs B
          </Link>
          <Link 
            to="/guia-migracion" 
            className="text-blue-600 font-semibold hover:underline"
          >
            diagrama
          </Link>
           <Link 
            to="/diagrama" 
            className="text-blue-600 font-semibold hover:underline"
          >
            🗺️ Guía Migración VE→CO
          </Link>
        </nav>

        {/* Rutas */}
        <Routes>
          <Route path="/" element={<CacheSimulator />} />
          <Route path="/ab" element={<CacheSimulatorAB />} />
          <Route path="/guia-migracion" element={<GuiaMigracion />} />
          <Route path="/diagrama" element={<Diagrama  />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;