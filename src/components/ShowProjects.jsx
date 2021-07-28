import React from 'react';
import ProjectCard from './ProjectCard';
import '../views/contents/contents.css';

const ShowProjects = ({ showProjects: { projects, titleCourse } }) => (
  <div className="contents">
    <h2>{titleCourse}</h2>
    {
        projects.map(({
          title, tec, description, path,
        }) => <ProjectCard title={title} tec={tec} description={description} path={path} />)
      }
  </div>
);

export default ShowProjects;
