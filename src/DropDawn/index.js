import "./dropDawn.css";

const DropDawn = (props) => {
  return (
    <div className="drop">
      <label>{props.label}</label>
      <select
        onChange={(evento) => props.aoAlterado(evento.target.value)}
        required={props.requered}
        value={props.valor}
      >
        <option value="">Selecione</option>
        {props.itens &&
          props.itens.map((item) => <option key={item}>{item}</option>)}
      </select>
    </div>
  );
};

export default DropDawn;
