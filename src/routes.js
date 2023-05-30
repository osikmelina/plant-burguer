import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import FormLogin from "./pages/Login";
import NovoPedido from "./pages/Atendimento";
import Modal from 'react-modal';
import Cardapio from "./pages/Cardapio";
import { clienteContext } from "./context/clienteContext";

// Código necessário para os recursos de acessibilidade
Modal.setAppElement('#root');

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FormLogin />}></Route>
        <clienteContext.Provider>        
        <Route path="/atendimento" element={<NovoPedido />}></Route>
        <Route path="/cardapio" element={<Cardapio />}></Route>
        </clienteContext.Provider>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes