import styles from "./Cozinha.module.css";
import LogoMenor from "../../componentes/LogoMenor";
import Tag from "../../componentes/Tag";
import CaixaFundo from "../../componentes/CaixaFundo";
import { useEffect, useState } from "react";
import { obterPedidos } from "../../API/orders";
import Botao from "../../componentes/Botao";
import Modal from "react-modal";
import { finalizados } from "../../API/orders";
import { setItem } from "../../storage/localStorage";

const EmPreparo = () => {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await obterPedidos();
      const listaPedidos = response.data;
      setPedidos(listaPedidos.filter(pedido => pedido.status !== "finalizado"));
      console.log(listaPedidos);
    }
    fetchData();
  }, []);

  const [erro, setErro] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);

  const finalizarPedido = async (orderId) => {
    console.log(orderId);
    setErro("");
    try {
      const response = await finalizados(orderId);
      const jsonData = response.data;
      console.log(jsonData)
      setItem("orderId", jsonData.id);
      setPedidos(prevStat => prevStat.filter(pedido => pedido.id !== orderId))
      
      if (jsonData.status === "finalizado") {
        setErro("O pedido foi finalizado");
        abrirModal();
        // navegar("/finalizados");
      } else {
        setErro("Ocorreu um erro ao finalizar o pedido.");
        abrirModal();
      }
    } catch (error) {
      console.log(error)
      setErro("Algo inesperado aconteceu, tente novamente.");
      abrirModal();
    }
  };

  function abrirModal() {
    setIsOpen(true);
  }

  function fecharModal() {
    setIsOpen(false);
  }

  return (
    <section>
      <LogoMenor />
      <div className={styles.txtItens}>
        <Tag texto="EM PREPARO" />
        <Tag texto="PEDIDOS FINALIZADOS" />
      </div>
      {pedidos.map((pedido) => (
        <CaixaFundo>
          <div key={pedido.id}>
            <span className={styles.nomeCliente}>
              Cliente: {pedido.client.toUpperCase()}
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
                <Botao onClick={() => finalizarPedido(pedido.id)}>PRONTO</Botao>
              </div>
            </div>
          </div>
        </CaixaFundo>
      ))}
      <Modal
        className="modal"
        overlayClassName="modal-fundo"
        isOpen={modalIsOpen}
        onRequestClose={fecharModal}
      >
        <div className="modal-conteudo">
          <p className="textoModal">{erro}</p>
          <button className="botao-ok" onClick={fecharModal}>
            OK
          </button>
        </div>
      </Modal>
    </section>
  );
};

export default EmPreparo;
