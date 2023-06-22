import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Modal from 'react-modal';
import FormLogin from './pages/Login';
import NovoPedido from './pages/Atendimento/NovoPedido';
import Cardapio from './pages/Cardapio';
import EmPreparo from './pages/Cozinha/EmPreparo';
import Finalizados from './pages/Cozinha/Finalizados';
import Atendimento from './pages/Atendimento/Atendimento';
import AdmProdutos from './pages/Admin/Produtos';
import { ClienteStore } from './context/clienteContext';
import Admin from './pages/Admin/Admin';
import Funcionario from './pages/Admin/Funcionario';

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
          path="atendimento/pedido"
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
        <Route
          path="/admin"
          element={(
            <ClienteStore>
              {' '}
              <Admin />
              {' '}
            </ClienteStore>
)}
        />
        <Route
          path="/admin/produtos"
          element={(
            <ClienteStore>
              {' '}
              <AdmProdutos />
              {' '}
            </ClienteStore>
)}
        />
        <Route
          path="/admin/funcionarios"
          element={(
            <ClienteStore>
              {' '}
              <Funcionario />
              {' '}
            </ClienteStore>
)}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
