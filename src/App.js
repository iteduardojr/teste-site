import "./App.css";
import Cursos from "./components/Cursos";
import FirstArea from "./components/FirstArea";
import Formulario from "./components/Formulario";
import Topo from "./components/Topo";

function App() {
  const cursos = [
    {
      titulo: "Liderança e Gestão de Equipes",
      descricao:
        "Aprenda a liderar com confiança, gerenciar equipes e desenvolver talentos.",
      imagem: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6",
      link: "https://exemplo.com/curso/lideranca",
    },
    {
      titulo: "Marketing Digital",
      descricao:
        "Domine SEO, mídias sociais, funis de vendas e campanhas online de sucesso.",
      imagem: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      link: "https://exemplo.com/curso/marketing-digital",
    },
    {
      titulo: "Excel Avançado",
      descricao:
        "Automatize planilhas, crie dashboards e domine fórmulas complexas.",
      imagem:
        "https://t3.ftcdn.net/jpg/02/28/18/48/360_F_228184808_BwcnbLZRuqThsuWqDtx8dJRM6CmfLkHN.jpg",
      link: "https://exemplo.com/curso/excel-avancado",
    },
    {
      titulo: "Desenvolvimento Web com React",
      descricao:
        "Construa aplicações web modernas e responsivas com React.js e Hooks.",
      imagem: "https://res.cdn.office.net/apphome/excelogimage.png",
      link: "https://exemplo.com/curso/react",
    },
    {
      titulo: "Design Gráfico com Figma",
      descricao:
        "Aprenda a criar interfaces visuais incríveis e protótipos funcionais.",
      imagem:
        "https://lh7-us.googleusercontent.com/UVEdb5ZmtZi7rwX6kMOfAP7CJQfckceyqHhH03R-2G8gOQ8koagkVVqkoxdJBAUH90A8GU9VcITnh7cd8j-XCGlunfTcjkw9lyM2Fh1TZ4H9qMHI__DHwewovUdn3gPFT_Vdag2RurL_-Ebr0D9Lhes",
      link: "https://exemplo.com/curso/design-figma",
    },
    {
      titulo: "Inteligência Emocional",
      descricao:
        "Desenvolva habilidades emocionais para melhorar relações pessoais e profissionais.",
      imagem: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
      link: "https://exemplo.com/curso/inteligencia-emocional",
    },
    {
      titulo: "Introdução à Ciência de Dados",
      descricao:
        "Descubra os fundamentos da análise de dados com Python e estatística.",
      imagem:
        "https://static.mundoeducacao.uol.com.br/vestibular/2020/08/ciencia-de-dados.jpg",
      link: "https://exemplo.com/curso/data-science",
    },
    {
      titulo: "Fundamentos de UX Design",
      descricao:
        "Entenda o comportamento do usuário e crie experiências memoráveis.",
      imagem:
        "https://entertechedu.com/site/wp-content/uploads/2023/03/ciencia-de-dados.jpg",
      link: "https://exemplo.com/curso/ux-design",
    },
  ];

  return (
    <div>
      <Topo />
      <FirstArea />
      <div className="fundo__map">
        <div className="espacamento">
          <h3>TEMAS DE FORMAÇÃO PROFISSIONAL</h3>
          <h1>
            Explore áreas fundamentais para o desenvolvimento profissional
          </h1>
        </div>
        <div className="colunas">
          {cursos.map((item, index) => (
            <Cursos
              key={index}
              titulo={item.titulo}
              descricao={item.descricao}
              imagem={item.imagem}
              link={item.link}
            />
          ))}
          <h4 className="mais">E muito mais!</h4>
        </div>
      </div>
      <div className="fundo__form">
        <h4 className="sub-titulo-form">Agendar Demonstração</h4>
        <h1 className="titulo-form">
          Você pode transformar o desenvolvimento profissional da sua equipe.
          Descubra como!
        </h1>
        <Formulario />
      </div>
    </div>
  );
}

export default App;
