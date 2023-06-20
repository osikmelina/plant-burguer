import styles from './CaixaFundo.module.css';

function CaixaFundo(props) {
  return (
    <div className={styles.caixaFundo}>
      {props.children}
    </div>
  );
}

export default CaixaFundo;
