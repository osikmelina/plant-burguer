import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Modal from 'react-modal';
import Botao from '../../componentes/Botao';
import CaixaFundo from '../../componentes/CaixaFundo';
import CampoTexto from '../../componentes/CampoTexto';
import Logo from '../../componentes/Logo';
import styles from './Login.module.css';
import login from '../../API/users';
import { setItem } from '../../storage/localStorage';

function FormLogin() {
  const navegar = useNavigate();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  const [modalIsOpen, setIsOpen] = useState(false);

  function abrirModal() {
    setIsOpen(true);
  }

  function fecharModal() {
    setIsOpen(false);
  }
  const aoLogar = async (evento) => {
    evento.preventDefault();
    setErro('');

    try {
      const response = await login(email, senha);
      setItem('token', response.data.accessToken);
      setItem('userId', response.data.user.id);
      if (response.data.user.role === 'atendimento') {
        navegar('/atendimento');
      }
      if (response.data.user.role === 'cozinha') {
        navegar('/preparo');
      }
      if (response.data.user.role === 'admin') {
        navegar('/admin');
      }
    } catch (error) {
      setErro('Algo inesperado aconteceu, tente novamente.');
      abrirModal();
    }
  };

  return (
    <section className={styles.login}>
      <Logo />
      <CaixaFundo>
        <h1> LOGIN </h1>
        <form onSubmit={aoLogar}>
          <CampoTexto
            type="e-mail"
            obrigatorio
            placeholder="E-MAIL"
            valor={email}
            aoAlterado={(valor) => setEmail(valor)}
          />
          <CampoTexto
            type="password"
            obrigatorio
            secureTextEntry
            placeholder="SENHA"
            valor={senha}
            aoAlterado={(valor) => setSenha(valor)}
          />
          <div className={styles.botao}>
            <Botao onClick={aoLogar}> ENTRAR </Botao>
          </div>
        </form>
      </CaixaFundo>
      <Modal
        className="modal"
        overlayClassName="modal-fundo"
        isOpen={modalIsOpen}
        onRequestClose={() => fecharModal()}
      >
        <div className="modal-conteudo">
          <p className="textoModal">{erro}</p>
          <button type="button" className="botao-ok" onClick={fecharModal}>OK</button>
        </div>
      </Modal>
    </section>
  );
}

export default FormLogin;
