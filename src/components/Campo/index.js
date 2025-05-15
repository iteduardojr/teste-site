import "./campo.css";

const Campo = ({ label }) => {
  return (
    <div className="campo">
      <label>{label}</label>
      <input></input>
    </div>
  );
};

export default Campo;
