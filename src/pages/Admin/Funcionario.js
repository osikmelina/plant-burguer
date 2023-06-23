/* eslint-disable max-len */
/* eslint-disable react/jsx-no-bind */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import { funcionario, deleteFuncionario } from '../../API/users';
import styles from './Funcionario.module.css';
import FormModal from '../../componentes/FormModal/FormModal';
import LogoMenor from '../../componentes/LogoMenor';
import Tag from '../../componentes/Tag';
import CaixaFundo from '../../componentes/CaixaFundo';
import Botao from '../../componentes/Botao';

function Funcionario() {
  const [funcionarios, setFuncionarios] = useState([]);
  // const [funcionarioSelecionado, setFuncionarioSelecionado] = useState(null);
  const [mensagem, setMensagem] = useState('');
  const [modalIsOpen, setIsOpen] = useState(false);
  const navegar = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const response = await funcionario();
      const listaFuncionario = response.data;
      setFuncionarios(listaFuncionario);
      console.log(listaFuncionario);
    }
    fetchData();
  }, []);

  function abrirModal() {
    setIsOpen(true);
  }

  function fecharModal() {
    setIsOpen(false);
  }

  const editarFuncionario = () => {
    // setFuncionarioSelecionado(funcionario);
    // abre modal

  };

  const excluirFuncionario = async (item) => {
    setMensagem('');
    try {
      await deleteFuncionario(item.id);
      setFuncionarios((prevFuncionarios) => prevFuncionarios.filter((colaborador) => colaborador.id !== item.id));
      setMensagem('Funcionário Excluído com Sucesso');
      abrirModal();
      // fetchData(); // Atualiza a lista de funcionários após a exclusão
    } catch (error) {
      console.log(error);
      setMensagem('Não foi possível excluir o funcionário');
      abrirModal();
    }
  };

  return (
    <section>
      <LogoMenor />
      <div className={styles.tags}>
        <Tag onClick={() => navegar('/admin/produtos')} texto="PRODUTOS" />
        <Tag texto="FUNCIONÁRIOS" />
      </div>
      <CaixaFundo>
        <div className={styles.fundoBranco}>
          <div className={styles.titulosLista}>
            <span>NOME</span>
            <span>FUNÇÃO</span>
            <span className={styles.tituloEmail}>E-MAIL</span>
          </div>
          <div className={styles.listaDados}>
            <div>
              {funcionarios.map((item) => (
                <div className={styles.listaItens} key={item.id}>
                  <span>{item.name}</span>
                  <span>{item.role}</span>
                  <span className={styles.email}>{item.email}</span>
                  <div className={styles.icones}>
                    <input
                      type="image"
                      className={styles.icone}
                      src="/imagens/icon-edit.png"
                      alt="icone edição"
                      onClick={() => (editarFuncionario(item))}
                    />
                    <input
                      type="image"
                      className={styles.icone}
                      src="/imagens/icon-lixo.png"
                      alt="icone lixo"
                      onClick={() => excluirFuncionario(item)}
                    />
                  </div>
                </div>
              ))}
            </div>
            <Botao>NOVO FUNCIONÁRIO</Botao>
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
          <p className="textoModal">{mensagem}</p>
          <button type="button" className="botao-salvar" onClick={fecharModal}>SALVAR</button>
        </div>
      </Modal>
      <FormModal />

      {/* funcionarioselecionado.email
      funcionarioselecionado.role */}
    </section>
  );
}

export default Funcionario;
