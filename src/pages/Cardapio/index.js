import Logo from "../../componentes/Logo";
import styles from "./Cardapio.module.css";
import Tag from "../../componentes/Tag";
import Cafe from "./Cafe";

const Cardapio = () => {
  return (
    <section>
      <Logo />
      <Tag className={styles.tag} texto="café da manhã" />
      <Tag className={styles.tag} texto="almoço e jantar" />
      <Cafe />
    </section>
  )     
}

export default Cardapio
