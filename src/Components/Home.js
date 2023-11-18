import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='top'>
      <div className='flex gap-3'>
        <p className='text-black-500'><Link to={"/user-detail"}>User-Details</Link></p>
        <p className='text-black-500'><Link to={"/login"}>Account Creation</Link></p>
      </div>
    </div>
  )
}

export default Home
