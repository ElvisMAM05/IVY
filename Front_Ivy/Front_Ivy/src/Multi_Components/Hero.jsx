import React from 'react'
import { useNavigate } from 'react-router-dom'
import "../Multi-Styles/Hero.css"

function Hero({rutaPag}) {

    const navigate=useNavigate()                      

  return (
    <div className='cont_hero'>
        <p onClick={rutaPag}>ir</p>
    </div>
  )
}

export default Hero
