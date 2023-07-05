import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import styles from './Cozinha.module.css';
import LogoMenor from '../../componentes/LogoMenor';
import Tag from '../../componentes/Tag';
import { obterPedidos, mudarStatus } from '../../API/orders';
import { setItem } from '../../storage/localStorage';
import MandarPedido from '../../componentes/MandarPedidos';
import BotaoVoltar from '../../componentes/BotaoVoltar/BotaoVoltar';

function EmPreparo() {
  const [pedidos, setPedidos] = useState([]);
  const [erro, setErro] = useState('');
  const [modalIsOpen, setIsOpen] = useState(false);
  const navegar = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const response = await obterPedidos();
      const listaPedidos = response.data;
      setPedidos(listaPedidos.filter((pedido) => pedido.status !== 'Pronto'));
    }
    fetchData();
  }, []);

  function abrirModal() {
    setIsOpen(true);
  }

  function fecharModal() {
    setIsOpen(false);
  }

  const finalizarPedido = async (orderId) => {
    setErro('');
    try {
      const response = await mudarStatus(orderId, 'Pronto');
      const jsonData = response.data;
      setItem('orderId', jsonData.id);
      setPedidos((prevStat) => prevStat.filter((pedido) => pedido.id !== orderId));
      if (jsonData.status === 'Pronto') {
        setErro('O pedido está pronto e foi enviado para o atendente!');
        abrirModal();
      }
    } catch (error) {
      setErro('Não foi possível finalizar o pedido, tente novamente.');
      abrirModal();
    }
  };

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <section>
      <div className={styles.cabecalho}>
        <BotaoVoltar />
        <LogoMenor />
      </div>
      <nav className={styles.txtItens}>
        <Tag texto="EM PREPARO" />
        <Tag onClick={() => navegar('/finalizados')} texto="PEDIDOS FINALIZADOS" />
      </nav>
      {pedidos.map((pedido) => (
        <MandarPedido pedido={pedido} mudarStatusPedido={finalizarPedido} texto="PRONTO" />
      ))}
      <Modal
        className="modal"
        overlayClassName="modal-fundo"
        isOpen={modalIsOpen}
        // eslint-disable-next-line react/jsx-no-bind
        onRequestClose={fecharModal}
      >
        <div className="modal-conteudo">
          <p className="textoModal">{erro}</p>
          <button type="button" className="botao-ok" onClick={fecharModal}>
            OK
          </button>
        </div>
      </Modal>
    </section>
  );
}

export default EmPreparo;
