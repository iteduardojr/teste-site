import BotaoFirstArea from "../BotaoFirstArea";
import "./firstArea.css";

const FirstArea = () => {
  return (
    <section className="container__first__area">
      <div className="alinhando">
        <h3>DESENVOLVIMENTO PROFISSIONAL ABRANGENTE</h3>
        <h1>Áreas de conhecimento</h1>
        <p>
          Conheça os temas de formação profissional disponíveis na plataforma
          Galena. Com cursos em liderança, tecnologia e mais, promovemos o
          treinamento de colaboradores para que desenvolvam habilidades
          essenciais.
        </p>
        <BotaoFirstArea />
      </div>
      <div>
        <img
          src="https://galena.com/wp-content/uploads/2024/06/img-principal.png"
          alt="dsadsa"
        />
      </div>
    </section>
  );
};

export default FirstArea;
