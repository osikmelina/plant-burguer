import { useNavigate } from 'react-router-dom';
import styles from './LogoMenor.module.css';

function LogoMenor() {
  const navegar = useNavigate();
  return (
    <section className={styles.logoMenor}>
      <input
        type="image"
        src="/imagens/logo.png"
        alt="logo plant & burguer"
        onClick={() => navegar('/')}
      />
    </section>
  );
}

export default LogoMenor;
