import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import LogoMenor from '../../componentes/LogoMenor';
import Tag from '../../componentes/Tag';
import CaixaFundo from '../../componentes/CaixaFundo';
import Botao from '../../componentes/Botao';
import styles from './Produtos.module.css';
import { deleteProduto, produtos } from '../../API/products';

function AdmProdutos() {
  // const [produtosLista, setProdutosLista] = useState([]);
  const [mensagem, setMensagem] = useState('');
  const [modalIsOpen, setIsOpen] = useState(false);
  const [produtoExcluido, setProdutoExcluido] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await produtos();
      const listaProdutos = response.data;
      setProdutoExcluido(listaProdutos);
    }
    fetchData();
  }, []);

  function abrirModal() {
    setIsOpen(true);
  }
  function fecharModal() {
    setIsOpen(false);
  }

  // function abrirFormModal() {
  //   setIsOpen(true);
  // }
  // function fecharFormModal() {
  //   setIsOpen(false);
  // }

  // const editarProduto = (item) => {
  //   setProdutoSelecionado(produto);
  //   abrirFormModal()
  // };

  const excluirProduto = async (item) => {
    setMensagem('');
    try {
      await deleteProduto(item.id);
      setProdutoExcluido((prevStat) => prevStat.filter((produto) => produto.id !== item.id));
      setMensagem('Produto excluído com sucesso');
      abrirModal();
    } catch (error) {
      setMensagem('Não foi possível excluir o produto');
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
              {produtoExcluido.map((item) => (
                <div className={styles.listaItens} key={item.id}>
                  <span>{item.name}</span>
                  <span>{item.price}</span>
                  <span>{item.type}</span>
                  <input
                    type="image"
                    className={styles.imgLixo}
                    src="/imagens/icon-lixo.png"
                    alt="icone lixo"
                    onClick={() => (excluirProduto(item))}
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
        // eslint-disable-next-line react/jsx-no-bind
        onRequestClose={fecharModal}
      >
        <div className="modal-conteudo">
          <p className="textoModal">{mensagem}</p>
          <button type="button" className="botao-salvar" onClick={fecharModal}>SALVAR</button>
        </div>
      </Modal>
    </section>
  );
}

export default AdmProdutos;
