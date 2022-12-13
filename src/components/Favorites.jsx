import React from 'react'

const Favorites = ({image, name, id}) => {
  return (
    <div className='favorit-rest' key={id}>
      <img src = {image} alt={name} id='favorite-image'/>

    </div>
  )
}

export default Favorites