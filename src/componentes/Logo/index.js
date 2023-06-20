import styles from './Logo.module.css';

function Logo() {
  return (
    <section className={styles.logo}>
      <img src="/imagens/logo.png" alt="logo plant & burguer" />
    </section>
  );
}

export default Logo;
