import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormLogin from "./pages/Login";
import NovoPedido from "./pages/Atendimento";


function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FormLogin />}></Route>
        <Route path="/atendimento" element={<NovoPedido />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes