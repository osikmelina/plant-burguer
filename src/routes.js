import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ClienteStore } from "./context/ClienteContext";
import Modal from 'react-modal';
import FormLogin from "./pages/Login";
import NovoPedido from "./pages/Atendimento";
import Cardapio from "./pages/Cardapio";
import Cozinha from "./pages/Cozinha";

// Código necessário para os recursos de acessibilidade
Modal.setAppElement('#root');

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FormLogin />}></Route>       
        <Route path="/atendimento" element={<ClienteStore> <NovoPedido /> </ClienteStore> }></Route>
        <Route path="/cardapio" element={<ClienteStore> <Cardapio /> </ClienteStore>}></Route>
        <Route path="/cozinha" element={<ClienteStore> <Cozinha /> </ClienteStore>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes