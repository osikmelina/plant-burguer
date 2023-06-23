import { request, getAuthorizationHeader } from './request';
import { getItem } from '../storage/localStorage';

export const pedidos = (cliente, produtos) => {
  const userId = getItem('userId');
  return request(
    'orders',
    {
      userId,
      client: cliente,
      products: produtos,
      status: 'pendente',
      dateEntry: new Date(),
    },
    'POST',
    getAuthorizationHeader(),
  );
};

export const obterPedidos = () => request('orders', null, 'GET', getAuthorizationHeader());

export const mudarStatus = (orderId, statusPedido) => request(
  `orders/${orderId}`,
  {
    orderId,
    status: statusPedido,
    dateFinal: new Date(),
  },
  'PATCH',
  getAuthorizationHeader(),
);
