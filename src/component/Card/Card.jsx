import React from 'react'
import './Card.css'

function Card({image}) {
  return (
    <div className='card-body'>
        <img className='card-image' src={image} alt="" />
    </div>
  )
}

export default Card