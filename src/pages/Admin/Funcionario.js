/* eslint-disable max-len */
/* eslint-disable react/jsx-no-bind */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import {
  funcionario,
  deleteFuncionario,
  editarFuncionario,
  criarFuncionario,
}
  from '../../API/users';
import styles from './Funcionario.module.css';
import FormModal from '../../componentes/FormModal/FormModal';
import LogoMenor from '../../componentes/LogoMenor';
import Tag from '../../componentes/Tag';
import CaixaFundo from '../../componentes/CaixaFundo';
import Botao from '../../componentes/Botao';

function Funcionario() {
  const [funcionarios, setFuncionarios] = useState([]);
  const [funcionarioSelecionado, setFuncionarioSelecionado] = useState(null);
  const [mensagem, setMensagem] = useState('');
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalFormIsOpen, setFormIsOpen] = useState(false);
  const navegar = useNavigate();
  const [novoColaborador, setNovoColaborador] = ({});

  async function fetchData() {
    const response = await funcionario();
    const listaFuncionario = response.data;
    setFuncionarios(listaFuncionario);
    console.log(listaFuncionario);
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

  const abrirFormModal = (item) => {
    if (item) {
      setFuncionarioSelecionado(item);
    } else {
      setNovoColaborador({});
    }
    setFormIsOpen(true);
  };

  function fecharFormModal() {
    setFormIsOpen(false);
  }

  const novoFuncionario = async (item) => {
    setNovoColaborador(item);
    // console.log(item);
    abrirFormModal();
  };

  const salvarNovoFuncionario = async () => {
    try {
      const response = await criarFuncionario(novoColaborador.id, novoColaborador.name, novoColaborador.role, novoColaborador.email, novoColaborador.password);
      const jsonData = response.data;
      console.log(jsonData);
      setNovoColaborador(jsonData.id);
      await fetchData();
      fecharFormModal();
    } catch (error) {
      console.log(error);
      setMensagem('Não foi possível editar os dados do funcionário');
      abrirModal();
    }
  };

  const atualizarFuncionario = async (item) => {
    setFuncionarioSelecionado(item);
    console.log(item);
    abrirFormModal();
  };

  const salvarFuncionarioEditado = async () => {
    try {
      const response = await editarFuncionario(funcionarioSelecionado.id, funcionarioSelecionado.name, funcionarioSelecionado.role, funcionarioSelecionado.email);
      const jsonData = response.data;
      console.log(jsonData);
      setFuncionarioSelecionado(jsonData.id);
      await fetchData();
      fecharFormModal();
    } catch (error) {
      console.log(error);
      setMensagem('Não foi possível editar os dados do funcionário');
      abrirModal();
    }
  };

  const excluirFuncionario = async (item) => {
    setMensagem('');
    try {
      await deleteFuncionario(item.id);
      setFuncionarios((prevFuncionarios) => prevFuncionarios.filter((colaborador) => colaborador.id !== item.id));
      setMensagem('Funcionário Excluído com Sucesso');
      abrirModal();
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
                      onClick={() => (atualizarFuncionario(item))}
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
            <Botao onClick={novoFuncionario}>NOVO FUNCIONÁRIO</Botao>
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
      <FormModal
        isFuncionarioForm
        className="modal"
        overlayClassName="modal-fundo"
        isOpen={modalFormIsOpen}
        name={funcionarioSelecionado?.name || novoColaborador?.name}
        email={funcionarioSelecionado?.email || novoColaborador?.email}
        role={funcionarioSelecionado?.role || novoColaborador?.role}
        password={funcionarioSelecionado ? undefined : novoColaborador.password}
        onChangeName={(value) => (funcionarioSelecionado
          ? setFuncionarioSelecionado({ ...funcionarioSelecionado, name: value })
          : setNovoColaborador({ ...novoColaborador, name: value }))}
        onChangeEmail={(value) => (funcionarioSelecionado
          ? setFuncionarioSelecionado({ ...funcionarioSelecionado, email: value })
          : setNovoColaborador({ ...novoColaborador, email: value }))}
        onChangeRole={(value) => (funcionarioSelecionado
          ? setFuncionarioSelecionado({ ...funcionarioSelecionado, role: value })
          : setNovoColaborador({ ...novoColaborador, role: value }))}
        onChangePassword={(value) => (funcionarioSelecionado
          ? setFuncionarioSelecionado({ ...funcionarioSelecionado, password: value })
          : setNovoColaborador({ ...novoColaborador, password: value }))}
        onRequestClose={fecharFormModal}
        onClick={funcionarioSelecionado ? salvarFuncionarioEditado : salvarNovoFuncionario}
      />
    </section>
  );
}

export default Funcionario;

// name={novoColaborador?.name}
// email={novoColaborador?.email}
// role={novoColaborador?.role}
// password={novoColaborador?.password}
// onChangeName={(value) => setFuncionarioSelecionado({ ...funcionarioSelecionado, name: value })}
// onChangeEmail={(value) => setFuncionarioSelecionado({ ...funcionarioSelecionado, email: value })}
// onChangeRole={(value) => setFuncionarioSelecionado({ ...funcionarioSelecionado, role: value })}
// onChangePassword={(value) => setFuncionarioSelecionado({ ...funcionarioSelecionado, password: value })}
// onRequestClose={fecharFormModal}
// onClick={salvarFuncionarioEditado}
// />

// <FormModal
// isFuncionarioForm
// className="modal"
// overlayClassName="modal-fundo"
// isOpen={modalFormIsOpen}
// name={funcionarioSelecionado?.name}
// email={funcionarioSelecionado?.email}
// role={funcionarioSelecionado?.role}
// password={novoColaborador?.password}
// onChangeName={(value) => setNovoColaborador({ ...novoColaborador, name: value })}
// onChangeEmail={(value) => setNovoColaborador({ ...novoColaborador, email: value })}
// onChangeRole={(value) => setNovoColaborador({ ...novoColaborador, role: value })}
// onChangePassword={(value) => setNovoColaborador({ ...novoColaborador, password: value })}
// onRequestClose={fecharFormModal}
//       onClick={salvarNovoFuncionario}
// />
