import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import LogoMenor from '../../componentes/LogoMenor';
import Tag from '../../componentes/Tag';
import CaixaFundo from '../../componentes/CaixaFundo';
import Botao from '../../componentes/Botao';
import styles from './Produtos.module.css';
import { deleteProduto, editarProduto, produtos } from '../../API/products';
import FormModal from '../../componentes/FormModal/FormModal';

function AdmProdutos() {
  const [produtosLista, setProdutosLista] = useState([]);
  const [mensagem, setMensagem] = useState('');
  const [modalIsOpen, setIsOpen] = useState(false);
  const [produtoSelecionado, setProdutoSelecionado] = useState([]);
  const navegar = useNavigate();

  async function fetchData() {
    const response = await produtos();
    const listaProdutos = response.data;
    setProdutosLista(listaProdutos);
  }

  useEffect(() => {
    fetchData();
  }, []);

  function abrirModal() {
    setIsOpen(true);
  }
  function fecharModal() {
    setIsOpen(false);
  }

  function abrirFormModal() {
    setIsOpen(true);
  }
  function fecharFormModal() {
    setIsOpen(false);
  }

  const atualizarProduto = async (item) => {
    setProdutoSelecionado(item);
    console.log(item);
    abrirFormModal();
  };

  const salvarProdutoEditado = async () => {
    try {
      const response = await editarProduto(
        produtoSelecionado.id,
        produtoSelecionado.name,
        produtoSelecionado.price,
        produtoSelecionado.type,
      );
      const jsonData = response.data;
      setProdutoSelecionado(jsonData.id);
      await fetchData();
      fecharFormModal();
    } catch (error) {
      setMensagem('Não foi possível atualizar o produto');
      abrirModal();
    }
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
                      onClick={() => (atualizarProduto(item))}
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
      <FormModal
        className={styles.modal}
        overlayClassName={styles.modalFundo}
        isOpen={modalIsOpen}
        type="text"
        name={produtoSelecionado?.email}
        onChangeName={(value) => (setProdutoSelecionado)(value)}
        // eslint-disable-next-line react/jsx-no-bind
        onRequestClose={fecharFormModal}
        onClick={salvarProdutoEditado}
      />
    </section>
  );
}

export default AdmProdutos;
