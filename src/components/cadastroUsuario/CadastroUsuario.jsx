import { Drawer, Input } from "antd";
import { useHistory } from "react-router-dom";
import "./cadastroUsuario.css";

const CadastroUsuario = ({ visible, onClose }) => {
  const history = useHistory();

  const handleCadastroUsuario = () => {
    history.push("/login");
  };

  return (
    <Drawer
      className="cadastroContainer"
      placement="right"
      onClose={onClose}
      visible={visible}
    >
      <div className="usuarioInfo">
        <div className="usuarioAvatar" />
        <Input placeholder="Digite o seu nome" id="nome" type="text" />
        <Input placeholder="Insira seu CEP" id="cep" type="text" />
      </div>
      <div>
        <form>
          <Input
            className="vermelho"
            id="celular"
            type="text"
            placeholder="Celular:"
          />
          <Input
            className="laranja"
            id="email"
            type="email"
            placeholder="E-mail:"
          />
          <Input className="amarelo" id="rua" type="text" placeholder="Rua:" />
          <Input
            className="azul"
            id="bairro"
            type="text"
            placeholder="Bairro:"
          />
          <Input
            className="verde"
            id="cidade"
            type="text"
            placeholder="Cidade:"
          />
          <Input
            className="roxo"
            id="estado"
            type="text"
            placeholder="Estado:"
          />
          <button className="cadastroButton" onClick={handleCadastroUsuario}>
            Cadastrar
          </button>
        </form>
      </div>
    </Drawer>
  );
};

export default CadastroUsuario;
