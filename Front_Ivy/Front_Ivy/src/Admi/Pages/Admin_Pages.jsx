import React from 'react'
import Admin from '../Components/Admin.jsx'
import Footer from '../../Multi_Components/Footer.jsx'
import  Navbar from '../../Multi_Components/NavBar_C.jsx'

function Admin_Pages() {
  return (
    <>
       <div className='admin'>
        <h1>Panel de Administración</h1>
    </div>
       <div>
        <Admin />
    </div>

    <div>
    <Footer />
    </div>
        
    
    </>
 
  )
}

export default Admin_Pages