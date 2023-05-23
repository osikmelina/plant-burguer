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

// async function login() {
//   const response = await fetch ('https://burger-queen-api-mock-ten.vercel.app/login', {
//     method: 'POST',
//     body: {
//       email: 'melina@gmail.com',
//       senha: '123456'
//     }
//   })
//   const data = await response.json();
//   console.log({ data })
// }

export default login