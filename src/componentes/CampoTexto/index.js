// import Botao from '../Botao';
import './CampoTexto.css';

const CampoTexto = (props) => {
  const aoDigitado = (evento) => {
    props.aoAlterado(evento.target.value)
  }

  return (
     <div className="campo-texto">
      <input 
      placeholder={props.placeholder}
      value={props.valor}
      onChange={aoDigitado}
      required={props.obrigatorio}
      />
    </div>
  )
}

export default CampoTexto
