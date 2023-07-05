import './CampoTexto.css';

function CampoTexto(props) {
  const aoDigitado = (evento) => {
    props.aoAlterado(evento.target.value);
  };

  return (
    <div className="campo-texto">
      <input
        type={props.type || 'text'}
        placeholder={props.placeholder}
        value={props.valor}
        onChange={aoDigitado}
        required={props.obrigatorio}
      />
    </div>
  );
}

export default CampoTexto;
