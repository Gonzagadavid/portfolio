import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import React from 'react';
import NotFound from '../views/contents/NotFound';
import { NotFoundMsg } from './constants';

describe('verifica a renderização da mensagem da pagina não encontrada', () => {
  it(' verifica a renderização da mensagem', () => {
    render(<NotFound />);

    expect(screen.getByText(NotFoundMsg)).toBeInTheDocument();
  });
});
