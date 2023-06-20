import { request, getAuthorizationHeader} from "./request"
import { getItem } from "../storage/localStorage"

export const pedidos = (cliente, produtos) => {
  const userId = getItem("userId")
  return request ('orders', 'POST', getAuthorizationHeader(),
    {
    userId,
    client:cliente, 
    products: produtos,
    status: "pendente",
    dateEntry: new Date(),
  }
)}

export const obterPedidos = () => {
  return request ('orders', 'GET', getAuthorizationHeader())
  }

export const finalizados = (orderId) => {
  return request (`orders/${orderId}`, 'PATCH', getAuthorizationHeader(),
    {
    orderId,
    status: "finalizado",
    dateFinal: new Date(),
  })
}



