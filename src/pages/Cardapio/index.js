import styles from "./Cardapio.module.css";
import Tag from "../../componentes/Tag";
import Cafe from "./Cafe";
import LogoMenor from "../../componentes/LogoMenor";
import CaixaResumo from "../../componentes/CaixaResumo";

const Cardapio = () => {
  return (
    <section>
      <LogoMenor />
        <div className={styles.txtItens}>
          <Tag className={styles.tag} texto="CAFÉ DA MANHÃ" />
          <Tag className={styles.tag} texto="ALMOÇO E JANTAR" />
        </div>
      <div className={styles.caixasPedido}>
      <Cafe />
      <CaixaResumo />
      </div>
    </section>
  )
}
export default Cardapio
