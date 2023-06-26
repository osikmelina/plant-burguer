import { request, getAuthorizationHeader } from './request';

export const login = (email, senha) => request('login', { email, password: senha }, 'POST', {});

export const funcionario = () => request('users', null, 'GET', getAuthorizationHeader());

export const deleteFuncionario = (id) => request(`users/${id}`, null, 'DELETE', getAuthorizationHeader());

export const editarFuncionario = (userId, name, role, email) => request(
  `users/${userId}`,
  {
    name,
    role,
    email,
  },
  'PATCH',
  getAuthorizationHeader(),
);
