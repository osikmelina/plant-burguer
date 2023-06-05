import React, { useContext, useState } from "react";
import styles from "./CaixaResumo.module.css";
import { ClienteContext } from "../../context/ClienteContext";
import Botao from "../Botao";

const CaixaResumo = ({ itemSelecionado }) => {
  const { cliente } = useContext(ClienteContext);
  const [itemRemovido, setItemRemovido] = useState();

  const removerItem = (item) => {
    itemSelecionado.find((i) => i.id === item.id);
    item.quantidade--;
    setItemRemovido([...itemSelecionado]);
  };

  const calcularTotal = () => {
    let total = 0;
    itemSelecionado.forEach((item) => {
      total += item.price * item.quantidade;
    });
    return total;
  };

  return (
    <section className={styles.fundoResumo}>
      <div className={styles.textoResumo}>
        <h3>Cliente: {cliente.toUpperCase()} </h3>
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
                <span className={styles.numerosResumo}>{item.quantidade}</span>
                <span>{`R$ ${item.price}`}</span>
                <img
                  className={styles.imgLixo}
                  src="/imagens/icon-lixo.png"
                  alt="icone lixo"
                  onClick={() => removerItem(itemRemovido)}
                />
            </div>
          ))}
        <div className={styles.totalPedido}>
          <h3> Total do Pedido: </h3>
          <p>R$ {calcularTotal()}</p>
        </div>
      </div>
      <Botao> ENVIAR </Botao>
    </section>
  );
};

export default CaixaResumo;
