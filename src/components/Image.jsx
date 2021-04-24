import React from 'react'
import './Image.css'

const Image = props => {
  return (
    <div className='Image'>
      <img src={props.src} alt={props.alt} />
    </div>
  )
}

export default Image
