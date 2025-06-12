import React from 'react'
import { useNavigate } from 'react-router-dom'

function Hero() {

    const navigate=useNavigate()

  return (
    <div className='cont_hero'>
        <p onClick={()=>navigate("/Categories")}>ir</p>
    </div>
  )
}

export default Hero
