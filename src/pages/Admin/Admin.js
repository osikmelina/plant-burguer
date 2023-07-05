import { useNavigate } from 'react-router-dom';
import Botao from '../../componentes/Botao';
import CaixaFundo from '../../componentes/CaixaFundo';
import Logo from '../../componentes/Logo';
import styles from './Admin.module.css';
import BotaoVoltar from '../../componentes/BotaoVoltar/BotaoVoltar';

function Admin() {
  const navegar = useNavigate();
  return (
    <>
      <BotaoVoltar />
      <section className={styles.admin}>
        <Logo />
        <CaixaFundo>
          <div className={styles.adminRotas}>
            <Botao onClick={() => navegar('./produtos')}> PRODUTOS </Botao>
            <Botao onClick={() => navegar('./funcionarios')}> FUNCIONÁRIOS </Botao>
          </div>
        </CaixaFundo>
      </section>
    </>
  );
}

export default Admin;
