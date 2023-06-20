import styles from './Tag.module.css';

function Tag(props) {
  return (
    <button type="button" className={styles.tag} onClick={props.onClick}>
      {props.texto}
    </button>
  );
}

export default Tag;
