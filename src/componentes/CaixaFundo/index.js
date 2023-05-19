import styles from './CaixaFundo.module.css'

const CaixaFundo = (props) => {
  return (
    <div className={styles.caixaFundo}>
      {props.children}
    </div>
  )
}

export default CaixaFundo