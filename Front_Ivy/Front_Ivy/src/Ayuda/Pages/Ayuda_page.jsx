import React from 'react'
import "../Styles/Ayuda_styles.css"
import Ayuda from '../Components/Ayuda'
import NavbarC from '../../User/Components/NavBar_User'
import Footer from '../../Multi_Components/Footer'
function Ayuda_page() {
  return (
    <div>
<NavbarC/>
<br />
<br />
<Ayuda/>
<Footer/>
    </div>
  )
}

export default Ayuda_page