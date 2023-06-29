import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CampoTexto from '../../componentes/CampoTexto';

it('Deve renderizar o campo corretamente com um valor e disparar uma ação ao modificar', () => {
  const aoAlterado = jest.fn();
  render(
    <CampoTexto valor="valor digitado" aoAlterado={aoAlterado} />,
  );
  const input = screen.getByDisplayValue('valor digitado');
  expect(input).toBeInTheDocument();

  const digitando = 'Novo valor';
  userEvent.type(input, digitando);
  expect(aoAlterado).toHaveBeenCalledTimes(digitando.length);
  expect(aoAlterado).toHaveBeenCalledWith(digitando);
});
