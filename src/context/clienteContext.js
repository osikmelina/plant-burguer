import { createContext, useState } from 'react';

export const ClienteContext = createContext({});

export function ClienteStore({ children }) {
  const [cliente, setCliente] = useState('');

  const addCliente = (name) => {
    setCliente(name);
  };

  return (
    <ClienteContext.Provider value={{ cliente, addCliente }}>
      {children}
    </ClienteContext.Provider>
  );
}
