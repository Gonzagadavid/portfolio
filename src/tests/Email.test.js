import { fireEvent, screen } from '@testing-library/dom';
import React from 'react';
import Email from '../components/Email';
import renderWithRouter from './helpers/renderWithRouter';

describe('Verifica a renderizacao do compoente Email', () => {
  it('verifica a renderizacao e o funcionamento', async () => {
    const { history } = renderWithRouter(<Email email="test@server.com" />);
    const email = screen.getByText('test@server.com');
    expect(email).toBeInTheDocument();
    expect(email.tagName).toBe('EM');
    fireEvent.click(email);
    expect(history.location.pathname).toBe('/');
  });
});
