import { render, screen } from '@testing-library/react';
import React from 'react';
import Header from '../components/Header';

describe('verifica o funcionamento do componente Header', () => {
  it('verifica se ao passar um titulo como props o mesmo é renderizado corretamente', () => {
    render(<Header text="Titulo de Teste" />);

    const titulo = screen.getByRole('heading', { level: 1 });
    expect(titulo).toBeInTheDocument();
    expect(titulo).toHaveTextContent('Titulo de Teste');
  });
});
