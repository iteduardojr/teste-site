import "./topo.css";

const Topo = () => {
  return (
    <div>
      <header className="container">
        <section>
          <a href="https://galena.com/" className="logo__botao">
            galena
          </a>
        </section>
        <section>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Cursos</a>
            </li>
            <li>
              <a href="/">Blogs</a>
            </li>
            <li>
              <a href="/">Para empresas</a>
            </li>
            <li className="mostrar-no-mobile">
              <a href="/" className="botao__entrar">
                Entrar
              </a>
            </li>
            <li>
              <a href="/" className="botao__demonstracao">
                Agendar demonstração
              </a>
            </li>
          </ul>
        </section>
      </header>
    </div>
  );
};

export default Topo;
