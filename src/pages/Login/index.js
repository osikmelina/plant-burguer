import Botao from "../../componentes/Botao";
import CaixaFundo from "../../componentes/CaixaFundo";
import CampoTexto from "../../componentes/CampoTexto";
import Logo from "../../componentes/Logo";
import styles from "./Login.module.css"


function Login() {
  return (
    <section className={styles.login}>
     <Logo />
      <CaixaFundo>
      <h1> LOGIN </h1>
      <CampoTexto placeholder="E-MAIL"/>
      <CampoTexto placeholder="SENHA"/>
      <div className={styles.botao}>
        <Botao texto="ENTRAR"/>
        </div>
      </CaixaFundo>
    </section>
  );
}

export default Login;