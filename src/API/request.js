import { getItem } from '../storage/localStorage';

const API_URL = 'http://localhost:8080';

export async function request(endpoint, body, method = 'GET', headers = {}) {
  const URL = `${API_URL}/${endpoint}`;
  const options = {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
  };
  if (body) {
    options.body = JSON.stringify(body);
  }

  const response = await fetch(URL, options);
  const data = await response.json();

  const value = { data, status: response.status };
  if (!response.ok) {
    throw new Error(value);
  }
  return value;
}

export function getAuthorizationHeader() {
  const token = getItem('token');
  return { Authorization: `Bearer ${token}` };
}
