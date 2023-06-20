import { request, getAuthorizationHeader } from './request';

export const produtos = () => {
  return request ('products', 'GET', getAuthorizationHeader())
};

export const deleteProduto = (productId) => {
  return request (`products/${productId}`, 'DELETE', getAuthorizationHeader(), {})
};

export const produtos = () => request('products', null, 'GET', getAuthorizationHeader());
