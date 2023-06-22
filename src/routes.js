import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Modal from 'react-modal';
import FormLogin from './pages/Login';
import NovoPedido from './pages/Atendimento/NovoPedido';
import Cardapio from './pages/Cardapio';
import EmPreparo from './pages/Cozinha/EmPreparo';
import Finalizados from './pages/Cozinha/Finalizados';
// import AdmProdutos from './pages/Admin/Produtos';
import { ClienteStore } from './context/clienteContext';
import Atendimento from './pages/Atendimento/Atendimento';

// Código necessário para os recursos de acessibilidade
Modal.setAppElement('#root');

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FormLogin />} />
        <Route
          path="/atendimento"
          element={(
            <ClienteStore>
              {' '}
              <Atendimento />
              {' '}
            </ClienteStore>
)}
        />
        <Route
          path="/pedido"
          element={(
            <ClienteStore>
              {' '}
              <NovoPedido />
              {' '}
            </ClienteStore>
)}
        />
        <Route
          path="/cardapio"
          element={(
            <ClienteStore>
              {' '}
              <Cardapio />
              {' '}
            </ClienteStore>
)}
        />
        <Route
          path="/preparo"
          element={(
            <ClienteStore>
              {' '}
              <EmPreparo />
              {' '}
            </ClienteStore>
)}
        />
        <Route
          path="/finalizados"
          element={(
            <ClienteStore>
              {' '}
              <Finalizados />
              {' '}
            </ClienteStore>
)}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
