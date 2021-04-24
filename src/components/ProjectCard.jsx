import React, { useState } from 'react'
import './ProjectCard.css'
import {
  SiJavascript, SiHtml5, SiCss3, SiNodeDotJs, SiReact,
  SiMongodb, SiSocketDotIo, SiMysql, SiAngular, SiTypescript
} from 'react-icons/si'

const ProjectCard = props => {
  const [color, setColor] = useState('white')
  const fontStyle = { color }
  const styleIcons = { fontSize: '36px', fill: color }
  const icons = {
    js: <SiJavascript style={styleIcons} />,
    html: <SiHtml5 style={styleIcons} />,
    css: <SiCss3 style={styleIcons} />,
    node: <SiNodeDotJs style={styleIcons} />,
    react: <SiReact style={styleIcons} />,
    mongo: <SiMongodb style={styleIcons} />,
    socket: <SiSocketDotIo style={styleIcons} />,
    mysql: <SiMysql style={styleIcons} />,
    angular: <SiAngular style={styleIcons} />,
    ts: <SiTypescript style={styleIcons} />
  }

  return (
    <div className='ProjectCard'>
      <a
        href={props.path}
        target='blank' onMouseOver={e => setColor('rgb(23, 18, 49)')}
        onMouseOut={e => setColor('white')}
      >
        <h4 style={fontStyle}>{props.title}</h4>
        <em style={fontStyle}>{props.description}</em>
        <div className='icons'>{props.tec.split(' ').map(s => <p key={s}>{icons[s]}</p>)}</div>
      </a>
    </div>
  )
}

export default ProjectCard
