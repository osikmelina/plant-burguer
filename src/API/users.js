import { request, getAuthorizationHeader } from './request';

const login = (email, senha) => request('login', { email, password: senha }, 'POST', {});

export default login;

export const funcionario = () => request('users', null, 'GET', getAuthorizationHeader());

export const deleteFuncionario = (id) => request(`users/${id}`, null, 'DELETE', getAuthorizationHeader());

export const editarFuncionario = (userId, email, role) => request(
  `users/${userId}`,
  {
    email,
    role,
    userId,
  },
  'PATCH',
  getAuthorizationHeader(),
);
