import { useNavigate } from "react-router-dom"
import { render, screen } from "@testing-library/react";
import  Login  from "../pages/Login";
import userEvent from "@testing-library/user-event";

jest.mock("react-router-dom")

describe('login', () => {
    it('deve redirecionar para a página de atendimento após o login com sucesso', () => {
        render(
            <Login />
        )
        const email = screen.getByPlaceholderText("E-MAIL")
        const senha = screen.getByPlaceholderText("SENHA")
        userEvent.type(email, 'teste@gmail.com')
        userEvent.type(senha, '1234')
        const btn = screen.getByText("ENTRAR")
        userEvent.click(btn)
        expect(screen.getByText('LOGIN')).toBeInTheDocument()
        // const loginElements = FormLogin()
    })
})