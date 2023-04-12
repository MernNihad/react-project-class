import React from 'react'
import './Card.css'

function Card({image,className}) {
  return (
    <div className='card-body'>
        <img className={className} src={`https://image.tmdb.org/t/p/w500/${image}`} alt="" />
    </div>
  )
}

export default Card