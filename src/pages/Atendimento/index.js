import Botao from "../../componentes/Botao"
import CaixaFundo from "../../componentes/CaixaFundo"
import CampoTexto from "../../componentes/CampoTexto"
import Logo from "../../componentes/Logo"
import styles from "./Atendimento.module.css"

const NovoPedido = () => {
    return (
        <section className={styles.login}>
          <Logo />
          <CaixaFundo>
          <CampoTexto 
            placeholder="NOME DO CLIENTE"
          />
          <div className={styles.botao}>
          <Botao> Novo Pedido </Botao>
          </div>
          </CaixaFundo>
        </section>    
    )
}

export default NovoPedido
