import Modal from 'react-modal';
import CampoTexto from '../CampoTexto';
import Botao from '../Botao';

function FormModal(props) {
  return (
    <Modal isOpen={props.isOpen}>
      <CampoTexto
        value={props.email}
        onChange={props.onChangeEmail}
      />
      <CampoTexto
        value={props.role}
        onChange={props.onChangeRole}
      />
      <Botao onClick={props.onClick}>
        SALVAR
      </Botao>
    </Modal>

  );
}
export default FormModal;
