import { request } from "./request"

const login = (email, senha, role) => {
 return request( 'login', 'POST', {}, {email, password:senha, role} )
}

export default login