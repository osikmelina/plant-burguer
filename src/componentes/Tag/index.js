import styles from "./Tag.module.css"; 

const Tag = (props) => {
  return ( <button className ={styles.tag} onClick={props.onClick}>
        {props.texto}
         </button>
  )
}

export default Tag