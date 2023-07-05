import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import LogoMenor from '../../componentes/LogoMenor';
import Tag from '../../componentes/Tag';
import { obterPedidos, mudarStatus } from '../../API/orders';
import MandarPedido from '../../componentes/MandarPedidos';
import styles from './Atendimento.module.css';
import BotaoVoltar from '../../componentes/BotaoVoltar/BotaoVoltar';

function PedidosProntos() {
  const [pedidos, setPedidos] = useState([]);
  const [erro, setErro] = useState('');
  const [modalIsOpen, setIsOpen] = useState(false);
  const navegar = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const response = await obterPedidos();
      const listaPedidos = response.data;
      setPedidos(listaPedidos.filter((pedido) => pedido.status === 'Pronto'));
      console.log(listaPedidos);
    }
    fetchData();
  }, []);

  function abrirModal() {
    setIsOpen(true);
  }

  function fecharModal() {
    setIsOpen(false);
  }

  const finalizarEntrega = async (orderId) => {
    console.log(orderId);
    try {
      const response = await mudarStatus(orderId, 'Finalizado');
      const jsonData = response.data;
      console.log(jsonData);
      setPedidos((prevStat) => prevStat.filter((pedido) => pedido.id !== orderId));
      if (jsonData.status === 'Finalizado') {
        setErro('O pedido foi entregue e finalizado com sucesso');
        abrirModal();
      }
    } catch (error) {
      console.log(error);
      setErro('Não foi possível finalizar o pedido, tente novamente.');
      abrirModal();
    }
  };

  return (
    <section>
      <div className={styles.cabecalho}>
        <BotaoVoltar />
        <LogoMenor />
      </div>
      <nav className={styles.txtItens}>
        <Tag texto="PARA SERVIR" />
        <Tag onClick={() => navegar('/entregues')} texto="PEDIDOS ENTREGUES" />
      </nav>
      {pedidos.map((pedido) => (
        <MandarPedido pedido={pedido} mudarStatusPedido={finalizarEntrega} texto="FINALIZAR" />
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

export default PedidosProntos;
