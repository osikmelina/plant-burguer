/* eslint-disable no-undef */
import { useNavigate } from 'react-router-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from '../pages/Login';
import login from '../API/users';
import { setItem } from '../storage/localStorage';

jest.mock('react-router-dom');
jest.mock('../api/users');
jest.mock('../storage/localStorage');

describe('login', () => {
  it('deve redirecionar para a página de atendimento após o login com sucesso', async () => {
    const mockUsuario = {
      data: {
        accessToken: 'teste-token',
        user: { id: 'teste' },
      },
    };
    login.mockResolvedValueOnce(mockUsuario);
    const mockNavigate = jest.fn();
    useNavigate.mockReturnValue(mockNavigate);

    render(
      <Login />,
    );
    const email = screen.getByPlaceholderText('E-MAIL');
    const senha = screen.getByPlaceholderText('SENHA');
    const btn = screen.getByText('ENTRAR');

    userEvent.type(email, 'teste@gmail.com');
    userEvent.type(senha, '123456');
    userEvent.click(btn);

    await waitFor(() => expect(setItem).toHaveBeenCalledTimes(2));
    expect(setItem).toHaveBeenCalledWith('token', mockUsuario.data.accessToken);
    expect(setItem).toHaveBeenCalledWith('userId', mockUsuario.data.user.id);
    expect(login).toHaveBeenCalledWith('teste@gmail.com', '123456');
    expect(mockNavigate).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith('/atendimento');
  });
});
