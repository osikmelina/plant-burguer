const API_URL = 'https://burger-queen-api-mock-ten.vercel.app'

const produtos = (token) => {
  return fetch(`${API_URL}/products`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'Authorization': `Bearer ${token}`
    },
  })
}

export default produtos