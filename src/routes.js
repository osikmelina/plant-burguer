import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormLogin from "./pages/Login";
import NovoPedido from "./pages/Atendimento";
import Modal from 'react-modal';
import Cardapio from "./pages/Cardapio";
import { clienteContext } from "./context/clienteContext";
import { useState } from "react";

// Código necessário para os recursos de acessibilidade
Modal.setAppElement('#root');

const Store = ({children}) => {
  const [cliente, setCliente] = useState('');

  return (
      <clienteContext.Provider value={{cliente, setCliente}}>
          {children}
      </clienteContext.Provider>
  )
};

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FormLogin />}></Route>       
        <Route path="/atendimento" element={<Store> <NovoPedido /> </Store> }></Route>
        <Route path="/cardapio" element={<Store> <Cardapio /> </Store>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes