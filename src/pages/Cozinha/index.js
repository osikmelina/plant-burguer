import styles from "./Cozinha.module.css"
import LogoMenor from "../../componentes/LogoMenor";
import Tag from "../../componentes/Tag";
import CaixaFundo from "../../componentes/CaixaFundo";
import { obterPedidos, pedidos } from "../../API/orders";

const Cozinha = () => {
  return (
    <section>
    <LogoMenor />
      <div className={styles.txtItens}>
        <Tag texto="EM PREPARO" />
        <Tag texto="PARA SERVIR" />
        <Tag texto="PEDIDOS FINALIZADOS" />
      </div>
      <CaixaFundo>
        <>
        {obterPedidos([])}
        </>
      </CaixaFundo>
    </section>
  )
}

export default Cozinha