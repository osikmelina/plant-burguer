import styles from "./Card.module.css"; 

const Card = (props) => {
  return ( <button className ={styles.card} onClick={props.onClick}>
        <p className={styles.txtProduto}>{props.texto}</p>
        <img className={styles.imgProduto} src={props.imagem} alt="imagem do produto"/>
    </button>
  )
}

export default Card