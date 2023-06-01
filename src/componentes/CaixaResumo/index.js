import { useContext } from 'react';
import styles from './CaixaResumo.module.css'
import { ClienteContext } from '../../context/ClienteContext';
import Botao from '../Botao';

const CaixaResumo = ({itemSelecionado}) => {
    const { cliente } = useContext(ClienteContext);
    
    return (
        <section className={styles.fundoResumo}>
            <div className={styles.textoResumo}>
                <h3>Cliente: {cliente} </h3>
                <h3>Resumo do Pedido</h3>
            </div>
            <div className={styles.fundoBranco}>
                <div className={styles.txtItens}>
                    <h3> ITEM </h3>
                    <h3> QTD </h3>
                    <h3> VALOR </h3>
                </div>
                {itemSelecionado.map((item) => (
                    <div key={item.id}>
                    <span>
                        {item.name}
                    </span>
                    <span>
                        {item.quantidade}
                    </span>
                    </div>
                ))}
                <h3> Total do Pedido: </h3>
            </div>
            <Botao> ENVIAR </Botao>
        </section>
    )
}

export default CaixaResumo