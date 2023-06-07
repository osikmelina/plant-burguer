import styles from "./Cozinha.module.css"
import LogoMenor from "../../componentes/LogoMenor";
import Tag from "../../componentes/Tag";
import CaixaFundo from "../../componentes/CaixaFundo";
import { useEffect, useState } from "react";
import { obterPedidos } from "../../API/orders";

const Cozinha = () => {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const token = localStorage.getItem("token");
      const response = await obterPedidos(token);
      const listaPedidos = await response.json();
      setPedidos(listaPedidos);
      console.log(listaPedidos)
    }
    fetchData()
  }, []);

  return (
    <section>
      <LogoMenor />
      <div className={styles.txtItens}>
        <Tag texto="EM PREPARO" />
        <Tag texto="PARA SERVIR" />
        <Tag texto="PEDIDOS FINALIZADOS" />
      </div>
      <CaixaFundo>
        <div>
          {pedidos.map((pedido) => (
            <div key={pedido.id}>
              <span>{pedido.client}</span>
            </div>
          ))}
          {/* {pedidos.products.map((product) => (
            <div key={product.id}>
              <span>{product.name}</span>
              <span>{product.quantidade}</span>
            </div> */}
          {/* ))} */}
        </div>
      </CaixaFundo>
    </section>
  )
}

export default Cozinha