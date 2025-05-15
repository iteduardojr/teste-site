import "./cursos.css";

const Cursos = ({ titulo, imagem, descricao, link }) => {
  return (
    <section className="cards">
      <div>
        <img src={imagem} alt="imagens" />
        <h2 className="sub-titulo">{titulo}</h2>
        <p className="paragrafo">{descricao}</p>
        <a className="link" href={link}>Conheça mais sobre essa trilha</a>
      </div>
    </section>
  );
};

export default Cursos;
