import { request, getAuthorizationHeader } from './request';

export const produtos = () => request('products', null, 'GET', getAuthorizationHeader());

export const deleteProduto = (productId) => request(`products/${productId}`, 'DELETE', getAuthorizationHeader(), {});
