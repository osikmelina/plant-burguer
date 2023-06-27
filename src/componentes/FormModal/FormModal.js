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
      <Botao onClick={props.onClick}>
        SALVAR
      </Botao>
    </Modal>
  );
}
export default FormModal;
