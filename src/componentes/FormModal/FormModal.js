import Modal from 'react-modal';
import CampoTexto from '../CampoTexto';
import Botao from '../Botao';

function FormModal(props) {
  return (
    <Modal isOpen={props.isOpen}>
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
