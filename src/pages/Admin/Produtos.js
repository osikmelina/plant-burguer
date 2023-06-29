/* eslint-disable max-len */
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import FormModal from '../../componentes/FormModal/FormModal';
import LogoMenor from '../../componentes/LogoMenor';
import Tag from '../../componentes/Tag';
import CaixaFundo from '../../componentes/CaixaFundo';
import Botao from '../../componentes/Botao';
import styles from './Produtos.module.css';
import {
  produtos,
  deleteProduto,
  editarProduto,
  criarProduto,
} from '../../API/products';

function AdmProdutos() {
  const [produtosLista, setProdutosLista] = useState([]);
  const [mensagem, setMensagem] = useState('');
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalFormIsOpen, setFormIsOpen] = useState(false);
  const [produtoSelecionado, setProdutoSelecionado] = useState([]);
  const [novoProduto, setNovoProduto] = useState([]);
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
    setFormIsOpen(true);
  }
  function fecharFormModal() {
    setFormIsOpen(false);
  }

  const criaProduto = async () => {
    setNovoProduto();
    abrirFormModal();
  };

  const salvarNovoProduto = async () => {
    try {
      const response = await criarProduto(
        novoProduto.id,
        novoProduto.name,
        novoProduto.price,
        novoProduto.type,
      );
      const jsonData = response.data;
      console.log(jsonData);
      setNovoProduto(novoProduto.id);
      await fetchData();
      fecharFormModal();
    } catch (error) {
      setMensagem('Não foi possível adicionar um novo produto');
      abrirModal();
    }
  };

  const atualizarProduto = async (item) => {
    setProdutoSelecionado(item);
    abrirFormModal();
  };

  const salvarProdutoEditado = async () => {
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
            <Botao onClick={() => (criaProduto())}>NOVO PRODUTO</Botao>
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
        // isProdutoForm
        className="modal"
        overlayClassName="modal-fundo"
        isOpen={modalFormIsOpen}
        name={produtoSelecionado?.name || novoProduto?.name}
        price={produtoSelecionado?.price || novoProduto?.price}
        type={produtoSelecionado?.type || novoProduto?.type}
        onChangeName={(value) => (Object.keys(produtoSelecionado).length !== 0
          ? setProdutoSelecionado({ ...produtoSelecionado, name: value })
          : setNovoProduto({ ...novoProduto, name: value }))}
        onChangePrice={(value) => (Object.keys(produtoSelecionado).length !== 0
          ? setProdutoSelecionado({ ...produtoSelecionado, price: value })
          : setNovoProduto({ ...novoProduto, price: value }))}
        onChangeType={(value) => (Object.keys(produtoSelecionado).length !== 0
          ? setProdutoSelecionado({ ...produtoSelecionado, type: value })
          : setNovoProduto({ ...novoProduto, type: value }))}
        // eslint-disable-next-line react/jsx-no-bind
        onRequestClose={fecharFormModal}
        onClick={Object.keys(produtoSelecionado).length !== 0 ? salvarProdutoEditado : salvarNovoProduto}
      />
    </section>
  );
}

export default AdmProdutos;
