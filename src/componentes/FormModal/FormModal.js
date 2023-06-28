import Modal from 'react-modal';
import CampoTexto from '../CampoTexto';
import Botao from '../Botao';
import styles from './FormModal.module.css';
// function FormModal(props) {
//   return (
//     <Modal isOpen={props.isOpen}>
//       <CampoTexto
//         valor={props.name}
//         aoAlterado={props.onChangeName}
//       />
//       <CampoTexto
//         valor={props.email}
//         aoAlterado={props.onChangeEmail}
//       />
//       <CampoTexto
//         valor={props.role}
//         aoAlterado={props.onChangeRole}
//       />
//       <CampoTexto
//         valor={props.password}
//         aoAlterado={props.onChangePassword}
//       />
//       <Botao onClick={props.onClick}>
//         SALVAR
//       </Botao>
//     </Modal>
//   );
// }
// export default FormModal;

function FormModal(props) {
  return (
    <Modal isOpen={props.isOpen} className={styles.modal}>
      {props.isFuncionarioForm ? (
        <section className={styles.formModal}>
          <input
            type="image"
            className={styles.iconFechar}
            src="/imagens/icon-fechar.png"
            alt="icone fechar"
            onClick={props.onRequestClose}
          />
          <h2>Nome</h2>
          <CampoTexto
            valor={props.name}
            aoAlterado={props.onChangeName}
          />
          <h2>E-mail</h2>
          <CampoTexto
            valor={props.email}
            aoAlterado={props.onChangeEmail}
          />
          <h2>Função</h2>
          <CampoTexto
            valor={props.role}
            aoAlterado={props.onChangeRole}
          />
          <h2>Senha</h2>
          <CampoTexto
            valor={props.password}
            aoAlterado={props.onChangePassword}
          />
        </section>
      ) : (
        <section className={styles.formModal}>
          <input
            type="image"
            className={styles.iconFechar}
            src="/imagens/icon-fechar.png"
            alt="icone fechar"
            onClick={props.onRequestClose}
          />
          <h2>Produto</h2>
          <CampoTexto
            valor={props.name}
            aoAlterado={props.onChangeName}
          />
          <h2>Preço</h2>
          <CampoTexto
            valor={props.price}
            aoAlterado={props.onChangePrice}
          />
          <h2>Tipo</h2>
          <CampoTexto
            valor={props.type}
            aoAlterado={props.onChangeType}
          />
        </section>
      ) }
      <section className={styles.formModalBotao}>
        <Botao onClick={props.onClick}>
          SALVAR
        </Botao>
      </section>
    </Modal>
  );
}

export default FormModal;

// <FormModal isFuncionarioForm={true}/>

// <FormModal isFuncionarioForm={false}/>

// function FormModal(props) {
//   return (
//     <Modal isOpen={props.isOpen}>
//       {props.inputs.map((input) => (
//         <CampoTexto
//           valor={input.valor}
//           aoAlterado={input.onChange}
//         />
//       ))}
//       <Botao onClick={props.onClick}>
//         SALVAR
//       </Botao>
//     </Modal>
//   );
// }
// export default FormModal;

// // funcionario

// const inputsForm = [
//   {
//     valor: funcionarioSelecionado.name,
//     onChange: changeDoName
//   },
//   {
//     valor: funcionarioSelecionado.email,
//     onChange: changeDoEmail
//   },
//   {
//     valor: funcionarioSelecionado.role,
//     onChange: changeDoRole
//   },

// ]

// <FormModal inputs={inputsForm} />

// const inputsForm = [
//   {
//     valor: produtoSelecionado.name,
//     onChange: changeDoName
//   },
//   {
//     valor: produtoSelecionado.price,
//     onChange: changeDoPrice
//   },
//   {
//     valor: produtoSelecionado.type,
//     onChange: changeDoType
//   },

// ]

// <FormModal inputs={inputsForm} />
