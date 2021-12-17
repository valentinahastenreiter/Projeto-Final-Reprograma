import { Drawer, Input } from "antd";
import { useHistory } from 'react-router-dom';
import "./cadastroPrestador.css";

const CadastroPrestador = ({ visible, onClose }) => {
  const history = useHistory();

  const handleCadastroPrestador = () => {
    history.push("/login");
  };

  return (
    <Drawer visible={visible} onClose={onClose} className="cadastroContainer">
      <div className="prestadorInfo">
        <div className="prestadorAvatar" />
        <Input placeholder="Digite o seu nome" id="nome" type="text" />
        <Input placeholder="Insira seu cep" id="cep" type="text" />
      </div>
      <form>
          <Input className="vermelho" id="celular" type="text" placeholder="Celular:" />
          <Input className="laranja" id="email" type="email" placeholder="E-mail:" />
          <Input className="amarelo" id="rua" type="text" placeholder="Rua:" />
          <Input className="azul" id="bairro" type="text" placeholder="Bairro:" />
          <Input className="verde" id="cidade" type="text" placeholder="Cidade:" />
          <Input className="roxo" id="estado" type="text" placeholder="Estado:" />
          <Input className="vermelho"  id="profissao" type="text" placeholder="Profissão:" />
          <Input
            className="laranja"
            id="experiencia"
            type="text"
            placeholder="Digite quanto tempo você tem de experiência"
          />
          <Input
            className="amarelo"
            id="portifolio"
            type="text"
            placeholder="Insira o link do seu Portifóio"
          />

          <textarea className="azul" id="sobre" cols="37" rows="5" placeholder="Fale um pouco sobre vocễ"></textarea>

          <Input
            className="verde"
            id="senha"
            type="password"
            placeholder="Digite sua senha"
          />
          <button className="cadastroButton" onClick={handleCadastroPrestador}>Cadastrar</button>
        </form>
    </Drawer>
  );
};

export default CadastroPrestador;
