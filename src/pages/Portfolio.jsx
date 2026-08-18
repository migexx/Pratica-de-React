export default function Portfolio() {
  const listaProjetos = [
    {
      id: 1,
      nome: 'Spot',
      disciplina:
        'Projeto desenvolvido para a disciplina de Concepção de Artefatos Digitais.',
      descrição:
        'Dashboard de análise de mercado que ajuda empreendedores a tomar decisões para a abertura de negócios',
      link: 'https://v0-recife-company-data.vercel.app/',
    },
    {
      id: 2,
      nome: 'PacIP',
      disciplina:
        'Projeto desenvolvido para a disciplina de Introdução à Programação.',
      descrição:
        'O PacIp é uma releitura do clássico Pac-Man no Mundo do Hora de Aventura, desenvolvido em Python utilizando a biblioteca Pygame.',
      link: 'https://github.com/ericsalmeida/projetoIP',
    },
  ];

  return (
    <section className="portfolio-container">
      <h2>Portfólio de Projetos</h2>

      <div className="projetos-grid">
        {listaProjetos.map((projeto) => (
          <article key={projeto.id} className="card-projeto">
            <h3>{projeto.nome}</h3>
            <p>{projeto.disciplina}</p>
            <p>{projeto.descrição}</p>

            {projeto.link && (
              <a href={projeto.link} target="_blank" rel="noreferrer">
                Ver Projeto
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
