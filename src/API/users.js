const API_URL = 'http://localhost:8080'

const login = (email, senha) => {
  return fetch(`${API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify({
      email: email,
      password: senha,
    })
  })
}

export default login