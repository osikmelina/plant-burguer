const API_URL = 'https://burger-queen-api-mock-ten.vercel.app'

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


