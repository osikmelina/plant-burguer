import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import LogoMenor from '../../componentes/LogoMenor';
import Tag from '../../componentes/Tag';
import CaixaFundo from '../../componentes/CaixaFundo';
import Botao from '../../componentes/Botao';
import styles from './Produtos.module.css';
import { deleteProduto, produtos } from '../../API/products';
import FormModal from '../../componentes/FormModal/FormModal';

function AdmProdutos() {
  const [produtosLista, setProdutosLista] = useState([]);
  const [mensagem, setMensagem] = useState('');
  const [modalIsOpen, setIsOpen] = useState(false);
  // const [produtoSelecionado, setProdutoSelecionado] = useState([]);
  const navegar = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const response = await produtos();
      const listaProdutos = response.data;
      setProdutosLista(listaProdutos);
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

  const editarProduto = () => {
    // setProdutoSelecionado(produto);
    // abrirFormModal()
  };

  const excluirProduto = async (item) => {
    setMensagem('');
    try {
      await deleteProduto(item.id);
      setProdutosLista((prevStat) => prevStat.filter((produto) => produto.id !== item.id));
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
      <div className={styles.tags}>
        <Tag texto="PRODUTOS" />
        <Tag onClick={() => navegar('/admin/funcionarios')} texto="FUNCIONÁRIOS" />
      </div>
      <CaixaFundo>
        <div className={styles.fundoBranco}>
          <div className={styles.titulosLista}>
            <span>ITEM</span>
            <span>PREÇO</span>
            <span>CARDÁPIO</span>
          </div>
          <div className={styles.listaDados}>
            <div>
              {produtosLista.map((item) => (
                <div className={styles.listaItens} key={item.id}>
                  <span>{item.name}</span>
                  <span>{item.price}</span>
                  <span>{item.type}</span>
                  <div className={styles.icones}>
                    <input
                      type="image"
                      className={styles.icone}
                      src="/imagens/icon-edit.png"
                      alt="icone edição"
                      onClick={() => (editarProduto(item))}
                    />
                    <input
                      type="image"
                      className={styles.icone}
                      src="/imagens/icon-lixo.png"
                      alt="icone lixo"
                      onClick={() => (excluirProduto(item))}
                    />
                  </div>
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
      <FormModal />
    </section>
  );
}

export default AdmProdutos;
