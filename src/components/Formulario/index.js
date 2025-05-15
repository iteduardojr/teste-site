import { useState } from "react";
import DropDawn from "../../DropDawn";
import BotaoEnviar from "../BotaoEnviar";
import Campo from "../Campo";
import "./formulario.css";

const Formulario = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [celular, setCelular] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [deseja, setDeseja] = useState("");
  const [colaboradores, setColaboradores] = useState("");

  const handleSubmit = (evento) => {
    evento.preventDefault();

    const dadosFormulario = {
      deseja,
      colaboradores,
      nome,
      email,
      celular,
      empresa,
    };

    console.log("Dados do formulário:", dadosFormulario);
  };

  return (
    <section className="coluna">
      <div>
        <img
          src="https://galena.com/wp-content/uploads/2024/06/agendar-demosntracao-873x1024.png"
          alt="Imagem"
        />
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <h1>Fale com um especialista</h1>
        <DropDawn
          label="Deseja:"
          valor={deseja}
          aoAlterado={(valor) => setDeseja(valor)}
          itens={[
            "Mais informações sobre a contratação da Galena para minha empresa",
            "Sou colaborador, tenho acesso à plataforma Galena e preciso de suporte",
            "Sou uma Instituição de Ensino - quero me tornar um parceiro",
            "Outro",
          ]}
        />
        <Campo
          label="Nome"
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <Campo
          label="E-mai corporativo"
          valor={email}
          aoAlterado={(valor) => setEmail(valor)}
        />
        <Campo
          label="Celular com DDD"
          valor={celular}
          aoAlterado={(valor) => setCelular(valor)}
        />
        <Campo
          label="Nome da empresa"
          valor={empresa}
          aoAlterado={(valor) => setEmpresa(valor)}
        />
        <DropDawn
          label="Número de colaboradores:"
          valor={colaboradores}
          aoAlterado={(valor) => setColaboradores(valor)}
          itens={[
            "Não possuo colaboradores",
            "1 a 300",
            "301 a 1000",
            "1001 a 5000",
            "acima de 5000",
          ]}
        />
        <BotaoEnviar>Enviar</BotaoEnviar>
      </form>
    </section>
  );
};

export default Formulario;
