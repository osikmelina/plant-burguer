import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormLogin from "./pages/Login";
import NovoPedido from "./pages/Atendimento";
import Modal from 'react-modal';
import Cardapio from "./pages/Cardapio";

// Código necessário para os recursos de acessibilidade
Modal.setAppElement('#root');

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FormLogin />}></Route>
        <Route path="/atendimento" element={<NovoPedido />}></Route>
        <Route path="/cardapio" element={<Cardapio />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes