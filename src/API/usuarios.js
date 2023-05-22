async function login() {
  const response = await fetch ('https://burger-queen-api-mock-ten.vercel.app/login', {
    method: 'POST',
    body: {
      email: 'melina@gmail.com',
      senha: '123456'
    }
  })
  const data = await response.json();
  console.log({ data })
}

export default login