import CaixaFundo from "../../componentes/CaixaFundo"
import Tag from "../../componentes/Tag"
import styles from "./Cardapio.module.css"
import { useEffect, useState } from "react";
import produtos from "../../API/products";

const Cafe = () => {
  const [produtosCafe, setProdutosCafe] = useState([]);
  //aqui o useState vai ser usado para criar uma variável de estado chamada produtosCafe que o valor inicial é um array vazio;
  //produtosCafe é uma variavel que está vazia
  //setProdutos é a função que vai adicionar os produtos dentro da variavel produtosCafe

  useEffect(() => {
    async function fetchData() {
      const token = localStorage.getItem("token")
      const response = await produtos(token)
      const listaProdutos = await response.json()
      setProdutosCafe(listaProdutos)
      console.log(listaProdutos)
    }
    fetchData()
  }, []);
  
  // const ListaProdutosCafe = () => {
  //   return (
  //   <>
  //     {produtosCafe.map((item) => (
  //        <li key={item.id}>
  //        {item.name}
  //        </li> 
  //     ))}
  //   </>
  // )}


  return (
    <>
    <CaixaFundo>
    {produtosCafe.map((item) => ( 
      <Tag
        key={item.id}
        texto={item.name} />   
  ))}
  </CaixaFundo>
  </>
)}
 
export default Cafe