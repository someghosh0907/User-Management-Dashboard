import React from 'react'

const Card = (props) => {
  return (
    <div className='top-g'>
        <div className='card-top'>
            <div className='card-in'>
                <p className='info'>Name:{props.username}</p>
                <p className='info'>E-Mail:{props.email}</p>
                <p className='info'>Password:{props.password}</p>
            </div>
        </div>
    </div>
  )
}

export default Card
