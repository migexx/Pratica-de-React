export default function Navbar({ setPaginaAtual, paginaAtual }) {
  return (
    <nav className="navbar">
      <h2>Miguel Almeida</h2>
      <div className="nav-links">
        <button
          className={paginaAtual === 'home' ? 'active' : ''}
          onClick={() => setPaginaAtual('home')}
        >
          Início
        </button>

        <button
          className={paginaAtual === 'sobre' ? 'active' : ''}
          onClick={() => setPaginaAtual('sobre')}
        >
          Sobre
        </button>

        <button
          className={paginaAtual === 'portfolio' ? 'active' : ''}
          onClick={() => setPaginaAtual('portfolio')}
        >
          Portfólio
        </button>
      </div>
    </nav>
  );
}
