import styles from "./Tag.module.css"; 

const Tag = (props) => {
  return ( <button className ={styles.tag}>
        {props.texto}
    </button>
  )
}

export default Tag