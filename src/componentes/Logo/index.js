import { useNavigate } from 'react-router-dom';
import styles from './Logo.module.css';

function Logo() {
  const navegar = useNavigate();

  return (
    <section className={styles.logo}>
      <input
        type="image"
        src="/imagens/logo.png"
        alt="logo plant & burguer"
        onClick={() => navegar('/')}
      />
    </section>
  );
}

export default Logo;
