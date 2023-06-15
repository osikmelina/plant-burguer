import { request, getAuthorizationHeader} from "./request"

const produtos = () => {
  return request ('products', 'GET', getAuthorizationHeader())
}

export default produtos