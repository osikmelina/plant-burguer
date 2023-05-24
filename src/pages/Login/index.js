import Botao from "../../componentes/Botao";
import CaixaFundo from "../../componentes/CaixaFundo";
import CampoTexto from "../../componentes/CampoTexto";
import Logo from "../../componentes/Logo";
import styles from "./Login.module.css"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import login from "../../API/login";

const FormLogin = () => {

  const navegar = useNavigate()
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  const aoLogar = async (evento) => {
    evento.preventDefault()
    setErro('')

  try {
      const response = await login(email, senha);
     
      if (response.status === 200){
      navegar('/atendimento')
      } else {
        setErro(alert('Ocorreu um erro ao efetuar o login'))
      }
 
      // if (loginUsuario.user.role === 'Atendimento') {
      //   navegar('/atendimento')
      // }
      // if (loginUsuario.user.role === 'Cozinha') {
      //   navegar('/cozinha')
      // }
      // if (loginUsuario === 'Admin') {
      //   navegar('/admin')
      // }
    } catch (error) {
      setErro(error.message)
    }
  }

  return (
    <section className={styles.login}>
     <Logo />
      <CaixaFundo>
      <h1> LOGIN </h1>
      <form onSubmit={aoLogar}>
        <CampoTexto
          type="e-mail"
          obrigatorio={true}
          placeholder="E-MAIL"
          valor={email}
          aoAlterado={valor => setEmail(valor)}
        />
        <CampoTexto
          type="password"
          obrigatorio={true}
          secureTextEntry={true}
          placeholder="SENHA"
          valor={senha}
          aoAlterado={valor => setSenha(valor)}
        
        />
        <div className={styles.botao}>
          <Botao texto="ENTRAR"/>
        </div>
      </form>
      </CaixaFundo>
    </section>
  );
}

export default FormLogin;