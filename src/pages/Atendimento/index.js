import Botao from "../../componentes/Botao"
import CaixaFundo from "../../componentes/CaixaFundo"
import CampoTexto from "../../componentes/CampoTexto"
import Logo from "../../componentes/Logo"
import styles from "./Atendimento.module.css"
import { clienteContext } from "../../context/clienteContext";
import { useContext } from 'react';

const NovoPedido = () => {
  const{cliente, setCliente} = useContext(clienteContext);
  console.log(cliente)
    return (
        <section className={styles.login}>
          <Logo />
          <CaixaFundo>
          <CampoTexto 
            placeholder="NOME DO CLIENTE"
            aoAlterado={(valor) => setCliente(valor) }
          />
          <div className={styles.botao}>
          <Botao> NOVO PEDIDO </Botao>
          </div>
          </CaixaFundo>
        </section>    
    )
}

export default NovoPedido
