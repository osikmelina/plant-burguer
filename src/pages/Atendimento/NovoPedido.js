import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Botao from '../../componentes/Botao';
import CaixaFundo from '../../componentes/CaixaFundo';
import CampoTexto from '../../componentes/CampoTexto';
import Logo from '../../componentes/Logo';
import styles from './Atendimento.module.css';
import { ClienteContext } from '../../context/clienteContext';
import BotaoVoltar from '../../componentes/BotaoVoltar/BotaoVoltar';

function NovoPedido() {
  const { addCliente } = useContext(ClienteContext);
  const navegar = useNavigate();

  const clicar = () => {
    navegar('/cardapio');
  };

  return (
    <>
      <BotaoVoltar />
      <section className={styles.pedido}>
        <Logo />
        <CaixaFundo>
          <CampoTexto
            placeholder="NOME DO CLIENTE"
            aoAlterado={(valor) => addCliente(valor)}
          />
          <div className={styles.botao}>
            <Botao onClick={clicar}> NOVO PEDIDO </Botao>
          </div>
        </CaixaFundo>
      </section>
    </>
  );
}

export default NovoPedido;
