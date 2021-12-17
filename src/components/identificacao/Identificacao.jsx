import { useState } from "react";
import CadastroPrestador from "../cadastroPrestador/CadastroPrestador";
import CadastroUsuario from "../cadastroUsuario/CadastroUsuario";
import "./identificacao.css";

const Identificacao = () => {
  const [showCadastroUsuario, setShowCadastroUsuario] = useState(false);
  const [showCadastroPrestador, setShowCadastroPrestador] = useState(false);

  const openCadastroUsuario = () => {
    setShowCadastroUsuario(true);
  };

  const closeCadastroUsuario = () => {
    setShowCadastroUsuario(false);
  };

  const openCadastroPrestador = () => {
    setShowCadastroPrestador(true);
  };

  const closeCadastroPrestador = () => {
    setShowCadastroPrestador(false);
  };

  return (
    <section className="indentificacaoContainer">
      <button className="yellow" onClick={openCadastroPrestador}>
        Prestador/Estabelecimento
      </button>
      <button className="purple" onClick={openCadastroUsuario}>
        Consumidor
      </button>

      <CadastroPrestador
        visible={showCadastroPrestador}
        onClose={closeCadastroPrestador}
      />
      <CadastroUsuario
        visible={showCadastroUsuario}
        onClose={closeCadastroUsuario}
      />
    </section>
  );
};
export default Identificacao;
