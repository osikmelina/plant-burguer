import { useState, useContext } from 'react';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import styles from './CaixaResumo.module.css';
import { ClienteContext } from '../../context/clienteContext';
import Botao from '../Botao';
import { pedidos } from '../../API/orders';

function CaixaResumo({ itemSelecionado, setItemSelecionado }) {
  const { cliente } = useContext(ClienteContext);
  const [modalIsOpen, setIsOpen] = useState(false);
  const navegar = useNavigate();

  const incrementarItem = (item) => {
    const itemCardapio = itemSelecionado.find((i) => i.id === item.id);
    if (itemCardapio) {
      item.quantidade++;
      setItemSelecionado([...itemSelecionado]);
    } else {
      item.quantidade = 1;
      setItemSelecionado([...itemSelecionado, item]);
    }
  };

  const decrementarItem = (item) => {
    const itemResumo = itemSelecionado.find((i) => i.id === item.id);
    if (itemResumo) {
      if (itemResumo.quantidade > 1) {
        // eslint-disable-next-line no-plusplus
        itemResumo.quantidade--;
        setItemSelecionado([...itemSelecionado]);
      } else {
        setItemSelecionado(itemSelecionado.filter((i) => i.id !== item.id));
      }
    }
  };

  const removerItem = (item) => {
    setItemSelecionado(itemSelecionado.filter((i) => i.id !== item.id));
  };

  const calcularTotal = () => {
    let total = 0;
    itemSelecionado.forEach((item) => {
      total += item.price * item.quantidade;
    });
    return total;
  };

  const enviarPedido = () => {
    pedidos(cliente, itemSelecionado);
    setIsOpen(true);
  };

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <section className={styles.fundoResumo}>
      <div className={styles.textoResumo}>
        <h3>
          Cliente:
          {cliente.toUpperCase()}
        </h3>
        <h3>Resumo do Pedido</h3>
      </div>
      <div className={styles.fundoBranco}>
        <div className={styles.txtItens}>
          <h3> ITEM </h3>
          <div className={styles.qtdValor}>
            <h3> QTD </h3>
            <h3> VALOR </h3>
          </div>
        </div>
        {itemSelecionado.map((item) => (
          <div className={styles.txtSpan} key={item.id}>
            <span>{item.name}</span>
            <div className={styles.quantidade}>
              <input
                type="image"
                className={styles.iconMais}
                src="/imagens/icon-mais.png"
                alt="icone de aumentar"
                onClick={() => incrementarItem(item)}
              />
              <span className={styles.numerosResumo}>{item.quantidade}</span>
              <input
                type="image"
                className={styles.iconMenos}
                src="/imagens/icon-menos.png"
                alt="icone de diminuir"
                onClick={() => decrementarItem(item)}
              />
            </div>
            <span>{`R$ ${item.price}`}</span>
            <input
              type="image"
              className={styles.imgLixo}
              src="/imagens/icon-lixo.png"
              alt="icone lixo"
              onClick={() => removerItem(item)}
            />
          </div>
        ))}
        <div className={styles.totalPedido}>
          <h3> Total do Pedido: </h3>
          <p>
            R$
            {calcularTotal()}
          </p>
        </div>
      </div>
      <Botao onClick={() => enviarPedido()}> ENVIAR </Botao>
      <Modal
        className="modal"
        overlayClassName="modal-fundo"
        isOpen={modalIsOpen}
        onRequestClose={() => setIsOpen(false)}
      >
        <div className="modal-conteudo">
          <p className="textoModal">O pedido foi enviado para a cozinha!</p>
          <button type="button" className="botao-ok" onClick={() => { setIsOpen(false); navegar('/atendimento'); }}>
            OK
          </button>
        </div>
      </Modal>
    </section>
  );
}

export default CaixaResumo;
