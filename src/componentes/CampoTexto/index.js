// import Botao from '../Botao';
import './CampoTexto.css';

const CampoTexto = (props) => {
  return (
     <div className="campo-texto">
      <input placeholder={props.placeholder}/>
    </div>
  )
}

export default CampoTexto
