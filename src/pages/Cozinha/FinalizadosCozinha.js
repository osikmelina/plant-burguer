import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { differenceInMinutes } from 'date-fns';
import styles from './Finalizados.module.css';
import LogoMenor from '../../componentes/LogoMenor';
import Tag from '../../componentes/Tag';
import CaixaFundo from '../../componentes/CaixaFundo';
import { obterPedidos } from '../../API/orders';
import Botao from '../../componentes/Botao';

function FinalizadosCozinha() {
  const [pedidos, setPedidos] = useState([]);
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

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <section>
      <LogoMenor />
      <nav className={styles.txtItens}>
        <Tag onClick={() => navegar('/preparo')} texto="EM PREPARO" />
        <Tag texto="PEDIDOS FINALIZADOS" />
      </nav>
      {pedidos.map((pedido) => (
        <CaixaFundo>
          <div key={pedido.id}>
            <span className={styles.nomeCliente}>
              Cliente:
              {pedido.client.toUpperCase()}
            </span>
            <div className={styles.fundoBranco}>
              <div className={styles.qtdValorTempo}>
                <span>ITEM</span>
                <span>QTD</span>
              </div>
              <div className={styles.pedidosFinalizados}>
                <div>
                  {pedido.products.map((product) => (
                    <div className={styles.produtos} key={product.id}>
                      <span>{product.name}</span>
                      <span>{product.quantidade}</span>
                    </div>
                  ))}
                </div>
                <div className={styles.qtdValorTempo}>
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
          </div>
        </CaixaFundo>
      ))}
    </section>
  );
}

export default FinalizadosCozinha;
