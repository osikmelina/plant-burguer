import { request } from "./request"

const login = (email, senha) => {
 return request( 'login', 'POST', {}, {email, password:senha} )
}

export default login