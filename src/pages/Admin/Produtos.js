import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import LogoMenor from '../../componentes/LogoMenor';
import Tag from '../../componentes/Tag';
import CaixaFundo from '../../componentes/CaixaFundo';
import Botao from '../../componentes/Botao';
import styles from './Admin.module.css';
import { deleteProduto, produtos } from '../../API/products';
import { setItem } from '../../storage/localStorage';

function AdmProdutos({ itemSelecionado, setItemSelecionado }) {
  const [produtosLista, setProdutosLista] = useState([]);
  const [erro, setErro] = useState('');
  const [modalIsOpen, setIsOpen] = useState(false);
  const [produtoExcluido, setProdutoExcluido] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await produtos();
      const listaProdutos = response.data;
      setProdutosLista(listaProdutos);
    }
    fetchData();
  }, []);

  const excluirProduto = async (productId) => {
    console.log(productId);
    setErro('');
    function abrirModal() {
      setIsOpen(true);
    }
  
    function fecharModal() {
      setIsOpen(false);
    }

    try {
      const response = await deleteProduto(productId);
      setItem('token', response.data.accessToken);
      setItem('productId', response.data.product.id);
      setProdutoExcluido((prevStat) => prevStat.filter((produto) => produto.id !== productId));
      if (produtoExcluido) {
      setItemSelecionado(itemSelecionado.filter((i) => i.id !== item.id));
      }
    } catch (error) {
      setErro('Não foi possível excluir o produto.');
      abrirModal();
    }
  };


  return (
    <section>
      <LogoMenor />
      <div>
        <Tag texto="PRODUTOS" />
        <Tag texto="FUNCIONÁRIOS" />
      </div>
      <CaixaFundo>
        <div className={styles.fundoBranco}>
          <div className={styles.titulosLista}>
            <span>ITEM</span>
            <span>PREÇO</span>
            <span>TIPO</span>
          </div>
          <div className={styles.listaDados}>
            <div>
              {produtosLista.map((item) => (
                <div className={styles.listaItens} key={item.id}>
                  <span>{item.name}</span>
                  <span>{item.price}</span>
                  <span>{item.type}</span>
                  <img
                    className={styles.imgLixo}
                    src="/imagens/icon-lixo.png"
                    alt="icone lixo"
                    onClick={() => (excluirProduto())(abrirModal())}
                  />
                </div>
              ))}
            </div>
            <Botao>NOVO PRODUTO</Botao>
          </div>
        </div>
      </CaixaFundo>
      <Modal
        className="modal"
        overlayClassName="modal-fundo"
        isOpen={modalIsOpen}
        onRequestClose={fecharModal}
      >
        <div className="modal-conteudo">
          <p className="textoModal" />
          <button className="botao-salvar" onClick={fecharModal}>SALVAR</button>
        </div>
      </Modal>
    </section>
  );
}

export default AdmProdutos;
