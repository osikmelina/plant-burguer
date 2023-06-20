import { request, getAuthorizationHeader } from './request';

const produtos = () => request('products', null, 'GET', getAuthorizationHeader());

export default produtos;
