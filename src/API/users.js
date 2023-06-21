import { request } from './request';

export const login = (email, senha) => request('login', { email, password: senha }, 'POST', {});

export default login;

// export const produtos = () => request('products', null, 'GET', getAuthorizationHeader());
