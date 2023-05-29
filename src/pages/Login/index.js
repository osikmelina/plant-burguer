import Botao from "../../componentes/Botao";
import CaixaFundo from "../../componentes/CaixaFundo";
import CampoTexto from "../../componentes/CampoTexto";
import Logo from "../../componentes/Logo";
import styles from "./Login.module.css"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import login from "../../API/users";
import Modal from "react-modal"

const FormLogin = () => {

  const navegar = useNavigate()
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const [modalIsOpen, setIsOpen] = useState(false);

  const aoLogar = async (evento) => {
    evento.preventDefault()
    setErro('')

  try {
      console.log("Valor da senha: ", senha)
      const response = await login(email, senha);
      const jsonData = await response.json()
      localStorage.setItem("token", jsonData.accessToken);
      if (response.status === 200){
      navegar('/atendimento')
      } else {
        setErro('Ocorreu um erro ao efetuar o login')
        abrirModal()
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
      setErro('Algo inesperado aconteceu, tente novamente.')
      abrirModal()
    }
  }

  function abrirModal() {
    setIsOpen(true);
  }

  function fecharModal() {
    setIsOpen(false);
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
          <Botao> ENTRAR </Botao>
        </div>
      </form>
      </CaixaFundo>
      <Modal
        className="modal"
        overlayClassName="modal-fundo"
        isOpen={modalIsOpen}
        onRequestClose={fecharModal}
      >
        <div className="modal-conteudo">
          <p className="textoModal">{erro}</p>
          <button className="botao-ok" onClick={fecharModal}>OK</button>
        </div>
      </Modal>
    </section>
  );
}

export default FormLogin;