import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { differenceInMinutes } from 'date-fns';
import styles from './Cozinha.module.css';
import LogoMenor from '../../componentes/LogoMenor';
import Tag from '../../componentes/Tag';
import CaixaFundo from '../../componentes/CaixaFundo';
import { obterPedidos } from '../../API/orders';
import Botao from '../../componentes/Botao';

function Finalizados() {
  const [pedidos, setPedidos] = useState([]);
  const navegar = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const response = await obterPedidos();
      const listaPedidos = response.data;
      setPedidos(listaPedidos.filter((pedido) => pedido.status === 'finalizado'));
      console.log(listaPedidos);
    }
    fetchData();
  }, []);

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <section>
      <LogoMenor />
      <div className={styles.txtItens}>
        <Tag onClick={() => navegar('/preparo')} texto="EM PREPARO" />
        <Tag texto="PEDIDOS FINALIZADOS" />
      </div>
      {pedidos.map((pedido) => (
        <CaixaFundo>
          <div key={pedido.id}>
            <span className={styles.nomeCliente}>
              Cliente:
              {pedido.client.toUpperCase()}
            </span>
            <div className={styles.fundoBranco}>
              <div className={styles.qtdValor}>
                <span>ITEM</span>
                <span>QTD</span>
                <span>TEMPO</span>
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
                <Botao>
                  Tempo de preparo:
                  {' '}
                  {differenceInMinutes(new Date(pedido.dateFinal), new Date(pedido.dateEntry))}
                  {' '}
                  minuto(s)
                </Botao>
              </div>
            </div>
          </div>
        </CaixaFundo>
      ))}

    </section>
  );
}

export default Finalizados;
