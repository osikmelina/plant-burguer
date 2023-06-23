import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import LogoMenor from '../../componentes/LogoMenor';
import Tag from '../../componentes/Tag';
import styles from './PedidosProntos.module.css';
import { obterPedidos, mudarStatus } from '../../API/orders';
import Botao from '../../componentes/Botao';
import CaixaFundo from '../../componentes/CaixaFundo';

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
      <LogoMenor />
      <nav className={styles.txtItens}>
        <Tag texto="PARA SERVIR" />
        <Tag onClick={() => navegar('./entregues')} texto="PEDIDOS ENTREGUE" />
      </nav>
      {pedidos.map((pedido) => (
        <CaixaFundo>
          <div key={pedido.id}>
            <span className={styles.nomeCliente}>
              Cliente:
              {' '}
              {pedido.client.toUpperCase()}
            </span>
            <div className={styles.fundoBranco}>
              <div className={styles.qtdValor}>
                <span>ITEM</span>
                <span>QTD</span>
              </div>
              <div className={styles.pedidosCozinha}>
                <div>
                  {pedido.products.map((product) => (
                    <div className={styles.produtos} key={product.id}>
                      <span>{product.name}</span>
                      <span>{product.quantidade}</span>
                    </div>
                  ))}
                </div>
                <Botao onClick={() => finalizarEntrega(pedido.id)}>PRONTO</Botao>
              </div>
            </div>
          </div>
        </CaixaFundo>
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
