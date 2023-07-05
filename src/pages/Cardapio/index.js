import React, { useEffect, useState } from 'react';
import styles from './Cardapio.module.css';
import Tag from '../../componentes/Tag';
import LogoMenor from '../../componentes/LogoMenor';
import CaixaResumo from '../../componentes/CaixaResumo';
import CaixaFundo from '../../componentes/CaixaFundo';
import { produtos } from '../../API/products';
import Card from '../../componentes/Card';
import BotaoVoltar from '../../componentes/BotaoVoltar/BotaoVoltar';

function Cardapio() {
  const [produtosCardapio, setProdutosCardapio] = useState([]);
  const [itemSelecionado, setItemSelecionado] = useState([]);
  const [tipoCardapio, setTipoCardapio] = useState('');

  useEffect(() => {
    async function fetchData() {
      const response = await produtos();
      const listaProdutos = response.data;
      setProdutosCardapio(listaProdutos);
      console.log(listaProdutos);
    }
    fetchData();
  }, []);

  const filtrarTipoCardapio = (tipo) => {
    setTipoCardapio(tipo);
  };

  const produtosFiltrados = tipoCardapio
    ? produtosCardapio.filter((item) => item.type === tipoCardapio) : produtosCardapio;

  const adicionarItem = (item) => {
    const itemCardapio = itemSelecionado.find((i) => i.id === item.id);
    if (itemCardapio) {
      item.quantidade++;
      setItemSelecionado([...itemSelecionado]);
    } else {
      item.quantidade = 1;
      setItemSelecionado([...itemSelecionado, item]);
    }
  };

  return (
    <section>
      <div className={styles.cabecalho}>
        <BotaoVoltar />
        <LogoMenor />
      </div>
      <div className={styles.txtItens}>
        <Tag onClick={() => filtrarTipoCardapio('café da manhã')} texto="CAFÉ DA MANHÃ" />
        <Tag onClick={() => filtrarTipoCardapio('almoço e jantar')} texto="ALMOÇO E JANTAR" />
      </div>
      <div className={styles.caixasPedido}>
        <CaixaFundo>
          <div className={styles.caixaProdutos}>
            {produtosCardapio
            && produtosFiltrados.map((item) => (
              <div className={styles.tagProdutos} key={item.id}>
                <Card
                  texto={item.name}
                  imagem={item.image}
                  onClick={() => adicionarItem(item)}
                />
              </div>
            ))}
          </div>
        </CaixaFundo>
        <CaixaResumo
          itemSelecionado={itemSelecionado}
          setItemSelecionado={setItemSelecionado}
        />
      </div>
    </section>
  );
}

export default Cardapio;
