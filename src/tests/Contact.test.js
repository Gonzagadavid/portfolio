import { render } from '@testing-library/react';
import { fireEvent, screen } from '@testing-library/dom';
import * as React from 'react';
import Contact from '../components/Contact';

describe('verifica a renderizacao do componente Contact', () => {
  const setState = jest.fn();
  const useStateMock = (initState) => [initState, setState];
  beforeEach(() => {
    jest.spyOn(React, 'useState').mockImplementation(useStateMock);
    render(<Contact icon="github" path="https:/pathExample" text="texto de test" />);
  });

  it('Ao passar informacoes como props são renderizadas corretamente', () => {
    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', 'https:/pathExample');
    expect(screen.getByText('texto de test')).toBeInTheDocument();
    expect(link.firstChild).toContainHTML('svg');
  });

  it('testa a mudança de estado com eventos do mouse', () => {
    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();
    expect(setState).toHaveBeenCalledTimes(0);
    fireEvent.mouseOver(link);
    expect(setState).toHaveBeenCalledTimes(1);
    fireEvent.mouseOut(link);
    expect(setState).toHaveBeenCalledTimes(2);
  });
});
