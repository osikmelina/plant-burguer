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
    dateEntry: new Date()
  })
}
  // return fetch(`${API_URL}/orders/${orderId}`, {
  //   method: "PATCH",
  //   headers: {
  //     "Content-Type": "application/json",
  //     'Authorization': `Bearer ${token}`
  //   },
  //   body: JSON.stringify({
  //     orderId,
  //     status: "finalizado",
  //     dateEntry: new Date()
  //   })
  // })



