import { useNavigate } from "react-router-dom";
import Botao from "../../componentes/Botao";
import CaixaFundo from "../../componentes/CaixaFundo"
import Logo from "../../componentes/Logo"
import styles from "./Atendimento.module.css"


function Atendimento() {
    const navegar = useNavigate();
    return (
        <section className={styles.atendimento}>
            <Logo />
            <CaixaFundo>
            <div className={styles.atendimentoRotas}>
                <Botao onClick={() => navegar('./pedido')}> NOVO PEDIDO </Botao>
                <Botao onClick={() => navegar('./paraservir')}> PEDIDOS PARA SERVIR </Botao>
            </div>
            </CaixaFundo>

        </section>
    )
}

export default Atendimento;