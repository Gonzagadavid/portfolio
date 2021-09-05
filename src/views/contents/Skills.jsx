import React from 'react';
import List from '../../components/List';
import { hardSkills, softSkills } from '../../data/lists/skillsList';
import './contents.css';

const Skills = () => (
  <div className="Skills contents">
    <h2>Habilidades</h2>
    <List list={softSkills} title="Habilidades que mais me orgulho" />
    <List list={hardSkills} title="Outras habilidades" />
  </div>
);

export default Skills;
