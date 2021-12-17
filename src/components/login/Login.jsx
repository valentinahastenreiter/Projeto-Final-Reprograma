import { Link, useHistory } from "react-router-dom";
import "./login.css";

const Login = () => {
  const history = useHistory();

  const handleLogin = () => {
    history.push("/mapa");
  };

  return (
    <div className="loginContainer">
      <h2>Faça seu login</h2>
      <input type="text" placeholder="Digite seu e-mail" />
      <input type="password" placeholder="Digite sua senha" />
      <button className="loginButton" onClick={handleLogin}>
        Entrar
      </button>
      <Link className="forgotPasswordButton" to="/forgotPassword">
        Esqueci minha senha?
      </Link>
    </div>
  );
};

export default Login;
