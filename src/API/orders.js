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

export const finalizados = (orderId) => request(
  `orders/${orderId}`,
  {
    orderId,
    status: 'finalizado',
    dateFinal: new Date(),
  },
  'PATCH',
  getAuthorizationHeader(),
);
// return fetch(`${API_URL}/orders/${orderId}`, {
//   method: "PATCH",
//   headers: {
//     "Content-Type": "application/json",
//     'Authorization': `Bearer ${token}`
//   },
//   body: JSON.stringify({
//     orderId,
//     status: "finalizado",
//     dateEntry: new Date()
//   })
// })
