import CaixaFundo from "../../componentes/CaixaFundo"
import Tag from "../../componentes/Tag"
import styles from "./Cardapio.module.css"


const Cafe = () => {
  return (
    <CaixaFundo>
      <h3 className={styles.txtItens}>CAFÉS</h3>
      <Tag className="bla" texto="americano" />
      <Tag className="la" texto="com leite" />
      <h3 className={styles.txtItens}>SUCOS</h3>
      <Tag className={styles.tag} texto="fruta natural" />
      <h3 className={styles.txtItens}>LANCHES</h3>
      <Tag className={styles.tag} texto="sanduíche de queijo" />
    </CaixaFundo>
  )
}

export default Cafe