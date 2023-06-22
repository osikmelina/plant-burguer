import { request, getAuthorizationHeader } from './request';

export const deleteProduto = (productId) => request(`products/${productId}`, 'DELETE', getAuthorizationHeader(), {});

export const produtos = () => request('products', null, 'GET', getAuthorizationHeader());
