import { useState } from 'react';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Portfolio from './pages/Portfolio';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  const [paginaAtual, setPaginaAtual] = useState('home');

  return (
    <div className="app-container">
      <Navbar setPaginaAtual={setPaginaAtual} paginaAtual={paginaAtual} />

      <main className="conteudo-principal">
        {paginaAtual === 'home' && <Home />}
        {paginaAtual === 'sobre' && <Sobre />}
        {paginaAtual === 'portfolio' && <Portfolio />}
      </main>
    </div>
  );
}

export default App;
