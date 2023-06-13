import "./Botao.css"

const Botao = (props) => {
  return ( <button className ='botao' onClick={props.onClick}>
        {props.children}
    </button>
  )
}

export default Botao