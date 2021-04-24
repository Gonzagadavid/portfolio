import React, { useState } from 'react'
import './Contact.css'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Contact = props => {
  const [color, setColor] = useState('white')
  const iconStyle = { fontSize: '18px', fill: color }
  const gitHubIcon = <FaGithub style={iconStyle} />
  const linkedinIcon = <FaLinkedin style={iconStyle} />
  const icon = props.icon === 'github' ? gitHubIcon : linkedinIcon
  return (
    <div className='Contact'>
      <a
        href={props.path} target='blank'
        onMouseOver={e => setColor('rgb(23, 18, 49)')} onMouseOut={e => setColor('white')}
      >
        {icon} {props.text}
      </a>
    </div>
  )
}

export default Contact
