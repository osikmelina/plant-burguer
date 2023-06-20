import { request, getAuthorizationHeader} from "./request"

export const deleteProduto = (productId) => {
  return request (`products/${productId}`, 'DELETE', getAuthorizationHeader(), {})
};

export const produtos = () => request('products', null, 'GET', getAuthorizationHeader());