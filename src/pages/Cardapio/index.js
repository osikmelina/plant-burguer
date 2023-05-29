import styles from "./Cardapio.module.css";
import Tag from "../../componentes/Tag";
import Cafe from "./Cafe";
import LogoMenor from "../../componentes/LogoMenor";

const Cardapio = () => {
  return (
    <section>
      <LogoMenor />
      <div className={styles.tipoCardapio}>
        <Tag className={styles.tag} texto="CAFÉ DA MANHÃ" />
        <Tag className={styles.tag} texto="ALMOÇO E JANTAR" />
      </div>
      <Cafe />
    </section>
  )     
}

export default Cardapio
