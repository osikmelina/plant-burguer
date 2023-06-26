import { request, getAuthorizationHeader } from './request';

export const produtos = () => request('products', null, 'GET', getAuthorizationHeader());

export const deleteProduto = (productId) => request(`products/${productId}`, null, 'DELETE', getAuthorizationHeader());

export const editarProduto = (productId, name, price, type) => request(
  `users/${productId}`,
  {
    name,
    price,
    type,
  },
  'PATCH',
  getAuthorizationHeader(),
);
