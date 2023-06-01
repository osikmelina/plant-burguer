import styles from "./Card.module.css"; 

const Card = (props) => {
  return ( <button className ={styles.card} onClick={props.onClick}>
        {props.texto}
        <img src={props.imagem} alt="imagem do produto"/>
    </button>
  )
}

export default Card