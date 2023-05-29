import { Route, BrowserRouter, Routes } from "react-router-dom"
import { render, screen } from "@testing-library/react";
import  FormLogin  from "../pages/Login";


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