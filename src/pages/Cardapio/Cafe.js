import CaixaFundo from "../../componentes/CaixaFundo"
import Tag from "../../componentes/Tag"
import styles from "./Cardapio.module.css"
import { useEffect, useState } from "react";
import produtos from "../../API/products";

const Cafe = () => {
  useEffect(() => {
    async function fetchData() {
      const token = localStorage.getItem("token")
      const response = await produtos(token)
      const listaProdutos = await response.json()
      console.log(listaProdutos)
    }
    fetchData()
  }) 
  return (
    <CaixaFundo>
      <h3 className={styles.txtItens}>CAFÉS</h3>
      <Tag className={styles.txtCafe} texto="americano" />
      <Tag className={styles.txtCafe} texto="com leite" />
      <h3 className={styles.txtItens}>SUCOS</h3>
      <Tag className={styles.txtCafe} texto="fruta natural" />
      <h3 className={styles.txtItens}>LANCHES</h3>
      <Tag className={styles.txtCafe} texto="sanduíche de queijo" />
    </CaixaFundo>
  )
}

export default Cafe