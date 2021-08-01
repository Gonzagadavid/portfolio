import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import ProjectCard from '../components/ProjectCard';
import personalProjects from '../data/projects/personalProjects';

const teste = personalProjects.projects[0];
const style = { color: 'white' };
React.useState = jest.fn().mockImplementation((initial) => [initial, (color) => { style.color = color; }]);

describe('verifica a renderizacao e o funcionamento do componente ProjectCard', () => {
  it('verifica se ao passar uma url como path do props o mesmo é renderizado na tela', () => {
    render(<ProjectCard title={teste.title} tec="" description={teste.description} path={teste.path} />);
    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', teste.path);
    fireEvent.mouseOver(link);
    console.log(style.color);
    fireEvent.mouseOut(link);
    // console.log(style.color);
    // expect(style.color).toBe('white');
    // expect(style.color).toBe('blue');
  });
});
