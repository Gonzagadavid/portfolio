import React from 'react'
import './Header.css'

const Header = props => {
  return (
    <div className='Header'>
      <h1>{props.text}</h1>
    </div>
  )
}

export default Header
