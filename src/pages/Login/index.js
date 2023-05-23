// import { useNavigate } from "react-router-dom";
import Botao from "../../componentes/Botao";
import CaixaFundo from "../../componentes/CaixaFundo";
import CampoTexto from "../../componentes/CampoTexto";
import Logo from "../../componentes/Logo";
import styles from "./Login.module.css"
// import { useState } from "react";
// import login from "../../API/login";

const FormLogin = () => {

  // const navegar = useNavigate()
  // const [email, setEmail] = useState('');
  // const [senha, setSenha] = useState('');
  // const [erro, setErro] = useState('');

  // const aoLogar = async (evento) => {
  //   evento.preventDefault()
  //   setErro('')

  // try {
  //     const loginUsuario = await login(email, senha)
  //     console.log(loginUsuario)

  //     if (loginUsuario.user.role === 'Atendimento') {
  //       navegar('/atendimento')
  //     }
  //     if (loginUsuario.user.role === 'Cozinha') {
  //       navegar('/cozinha')
  //     }
  //     if (loginUsuario.user.role === 'Admin') {
  //       navegar('/admin')
  //     }
  //   } catch (error) {
  //     setErro(error.message)
  //   }
  // }

  return (
    <section className={styles.login}>
     <Logo />
      <CaixaFundo>
      <h1> LOGIN </h1>
      {/* <form onSubmit={aoLogar}> */}
        <CampoTexto
          // obrigatorio={true}
          placeholder="E-MAIL"
          // valor={email}
        />
        <CampoTexto
          // obrigatorio={true}
          placeholder="SENHA"
          // valor={senha}
          // tipo="password"
        />
        <div className={styles.botao}>
          <Botao texto="ENTRAR"/>
        </div>
      {/* </form> */}
      </CaixaFundo>
    </section>
  );
}

export default FormLogin;