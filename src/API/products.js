const API_URL = 'http://localhost:8080'

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