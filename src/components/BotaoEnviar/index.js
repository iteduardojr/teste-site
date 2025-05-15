import "./botaoEnviar.css";

const BotaoEnviar = (props) => {
  return (
    <div>
      <button className="botao-enviar">{props.children}</button>
    </div>
  );
};

export default BotaoEnviar;
