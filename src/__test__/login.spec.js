import { useNavigate } from "react-router-dom"
import { render, screen, waitFor } from "@testing-library/react";
import  Login  from "../pages/Login";
import userEvent from "@testing-library/user-event";
import login from "../API/users";

jest.mock("react-router-dom");
jest.mock('../../api/users');
jest.mock('../../storage/localStorage');

describe('login', () => {
    it('deve redirecionar para a página de atendimento após o login com sucesso', async () => {
        const mockUsuario = {
            acessToken: 'teste-token',
        }
        login.mockResolvedValueOnce(mockUsuario);
        const mockNavigate = jest.fn();
        useNavigate.mockReturnValue(mockNavigate);

        render(
            <Login />
        )
        const email = screen.getByPlaceholderText("E-MAIL")
        const senha = screen.getByPlaceholderText("SENHA")
        const btn = screen.getByText("ENTRAR")

        // await waitFor(() => {
            userEvent.type(email, 'teste@gmail.com');
            userEvent.type(senha, '123456');
            userEvent.click(btn);
        });
        
        // await waitFor(() => expect(login).toHaveBeenCalledTimes(1));
        expect(login).toHaveBeenCalledWith('teste@gmail.com', '123456');
    });
});