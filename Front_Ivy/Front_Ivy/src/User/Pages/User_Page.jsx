import React from 'react'
import Users from '../Components/Users'
import  Footer from "../../Multi_Components/Footer.jsx"
import Categories from '../Components/Categories.jsx'
import NavbarC from '../Components/NavBar_User.jsx'

function User_Page() {
  return (
    <> 
    <br />
    <br />
     <NavbarC />
    <br />
      <Users />
      <br />
      <Categories />
      <Footer />
    
     </>
  )
}

export default User_Page