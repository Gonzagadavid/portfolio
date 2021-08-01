import {
  cleanup, fireEvent, render, screen,
} from '@testing-library/react';
import * as React from 'react';
import ProjectCard from '../components/ProjectCard';
import personalProjects from '../data/projects/personalProjects';

const teste = personalProjects.projects[0];

describe('verifica a renderizacao e o funcionamento do componente ProjectCard', () => {
  const setState = jest.fn();
  const useStateMock = (initState) => [initState, setState];
  beforeEach(() => {
    jest.spyOn(React, 'useState').mockImplementation(useStateMock);
    render(<ProjectCard title={teste.title} tec="js" description={teste.description} path={teste.path} />);
  });

  afterEach(cleanup);

  it('verifica a url do link e se os eventos chamam a funcao que altera o estado', () => {
    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', teste.path);
    expect(setState).toHaveBeenCalledTimes(0);
    fireEvent.mouseOver(link);
    expect(setState).toHaveBeenCalledTimes(1);
    fireEvent.mouseOut(link);
    expect(setState).toHaveBeenCalledTimes(2);
  });

  it('verifica se o titulo, descricao e icon sao renderizado corretamente', () => {
    const title = screen.getByRole('heading', { level: 4 });
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent(teste.title);
    const description = screen.getByText(teste.description);
    expect(description).toBeInTheDocument();
    const iconJs = screen.getByRole('img');
    expect(iconJs).toBeInTheDocument();
  });
});
