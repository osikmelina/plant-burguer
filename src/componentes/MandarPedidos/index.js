import React from 'react';
import CaixaFundo from '../CaixaFundo';
import styles from './MandarPedidos.module.css';
import Botao from '../Botao';

function MandarPedido({ pedido, mudarStatusPedido, texto }) {
  return (
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
            <Botao onClick={() => mudarStatusPedido(pedido.id)}>{texto}</Botao>
          </div>
        </div>
      </div>
    </CaixaFundo>
  );
}

export default MandarPedido;
