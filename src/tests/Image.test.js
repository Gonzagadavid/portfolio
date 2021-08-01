import { render, screen } from '@testing-library/react';
import React from 'react';
import Image from '../components/Image';
import Foto from '../images/perfil.jpg';

describe('verifica a renderização e o funcionamento do componente Image', () => {
  it('verifica se ao passar uma image como props a mesma é renderizada', () => {
    render(<Image src={Foto} alt="foto de perfil" />);

    const img = screen.getByRole('img');
    expect(img).toBeInTheDocument();
    expect(img).toHaveProperty('src', `http://localhost/${Foto}`);
    expect(img).toHaveProperty('alt', 'foto de perfil');
  });
});
