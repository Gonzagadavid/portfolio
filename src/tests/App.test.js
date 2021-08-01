import React from 'react';
import App from '../App';
import renderWithRouter from './helpers/renderWithRouter';

describe('teste rotas e rederizacao da pagina', () => {
  window.scrollTo = jest.fn().mockImplementation((x) => x);
  it('testa url das rotas', () => {
    const { history } = renderWithRouter(<App />);
    expect(history.location.pathname).toBe('/');
  });
});
