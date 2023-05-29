import { render, screen } from "@testing-library/react";
import Botao from "../../componentes/Botao";

it("Deve renderizar o botão corretamente", () => {
    render(
        <Botao > ENTRAR </Botao>
    )
    const btn = screen.getByText("ENTRAR");
    expect(btn).toBeInTheDocument();
    expect(btn).toMatchSnapshot();
})