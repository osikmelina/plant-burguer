import './Logo.css'

const Logo = () => {
    return (
    <section className='logo'>
        <img src="/imagens/logo.png" alt="logo plant & burguer" />
    <div className="campo-texto">
      <input placeholder='E-MAIL'/>
      <input placeholder='SENHA'/>
    </div>
    </section>
    )
}

export default Logo
