import { Route, BrowserRouter, Routes } from "react-router-dom"

const { render, screen } = require("@testing-library/react")
const { default: FormLogin } = require("../pages/Login")


describe('Deve fazer login', () => {
    it('renderiza o componente login', () => {
        render(
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<FormLogin />}></Route>
                </Routes>
            </BrowserRouter>
        )
        expect(screen.getByText('LOGIN')).toBeInTheDocument()
        // const loginElements = FormLogin()
    })
})