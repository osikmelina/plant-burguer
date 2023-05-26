import CaixaFundo from "../../componentes/CaixaFundo"
import Tag from "../../componentes/Tag"
import styles from "./Cardapio.module.css"

const Almoco = () => {
  return (
    <CaixaFundo>
      <h3>HAMBÚRGUERES</h3>
      <Tag className={styles.tag} texto="simples" />
      <Tag className={styles.tag} texto="duplo" />
      <h3>ACOMPANHAMENTOS</h3>
      <Tag className={styles.tag} texto="batata frita" />
      <Tag className={styles.tag} texto="anéis de cebola" />
      <h3>BEBIDAS</h3>
      <Tag className={styles.tag} texto="água 500ml" />
      <Tag className={styles.tag} texto="água 750ml" />
      <Tag className={styles.tag} texto="refrigerante 500ml" />
      <Tag className={styles.tag} texto="refrigerante 750ml" />
    </CaixaFundo>
  )
}

export default Almoco