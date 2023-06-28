import Modal from 'react-modal';
import CampoTexto from '../CampoTexto';
import Botao from '../Botao';
// import styles from './FormModal.module.css';

function FormModal(props) {
  return (
    <Modal isOpen={props.isOpen}>
      <CampoTexto
        valor={props.name}
        aoAlterado={props.onChangeName}
      />
      <CampoTexto
        valor={props.email}
        aoAlterado={props.onChangeEmail}
      />
      <CampoTexto
        valor={props.role}
        aoAlterado={props.onChangeRole}
      />
      <CampoTexto
        valor={props.password}
        aoAlterado={props.onChangePassword}
      />
      <Botao onClick={props.onClick}>
        SALVAR
      </Botao>
    </Modal>
  );
}
export default FormModal;

// function FormModal(props) {
//   return (
//     <Modal isOpen={props.isOpen}>
//       {props.isFuncionarioForm ? (
//         <>
//         <CampoTexto
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
//       </>
//       ) :  <>
//       <CampoTexto
//       valor={props.name}
//       aoAlterado={props.onChangeName}
//     />
//     <CampoTexto
//       valor={props.price}
//       aoAlterado={props.onChangePrice}
//     />
//     <CampoTexto
//       valor={props.type}
//       aoAlterado={props.onChangeType}
//     />
//     </> }
//       <Botao onClick={props.onClick}>
//         SALVAR
//       </Botao>
//     </Modal>
//   );
// }
// export default FormModal;

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
