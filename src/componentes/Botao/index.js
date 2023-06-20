import './Botao.css';

function Botao(props) {
  return (
    <button type="button" className="botao" onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default Botao;
