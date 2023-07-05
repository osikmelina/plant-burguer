import { useNavigate } from 'react-router-dom';
import iconeVoltar from './icon-voltar.png';
import styles from './BotaoVoltar.module.css';

function BotaoVoltar() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <button type="button" className={styles.botao} onClick={handleGoBack}>
      <img src={iconeVoltar} className={styles.botaoVoltar} alt="botao voltar" />
    </button>
  );
}

export default BotaoVoltar;
