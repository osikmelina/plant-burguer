import { request } from './request';

const login = (email, senha) => request('login', { email, password: senha }, 'POST', {});

export default login;
