const API_URL = 'http://localhost:8080'

export const pedidos = (token, userId, cliente, produtos) => {
  return fetch(`${API_URL}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({
      userId, 
      client: cliente,
      products: produtos,
      status: "pendente",
      dateEntry: new Date()
    })
  })
}

export const obterPedidos = (token) => {
  return fetch(`${API_URL}/orders`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'Authorization': `Bearer ${token}`
    },
  })
}

export const finalizados = (token, orderId) => {
  return fetch(`${API_URL}/orders/${orderId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({
      orderId,
      status: "finalizado",
      dateEntry: new Date()
    })
  })
}


