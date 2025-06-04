
import NavbarC from "./NavbarC"
import CarouselC from "./CarouselC"
import "../Styles/Home.css"
function Home() {
  return (
    <>
    <div className="Principal">
      <div className="Navbar">

      <NavbarC/>   
      </div>
    </div>
      <CarouselC/>
      <div className="Container_Mayor">
      <div  className="Container">
        <h1 className="Title">Bienvenido a Front Ivy</h1>
        <p className="Description">IVY es una plataforma dinámica diseñada para conectar a usuarios con profesionales y servicios
        de manera rápida, eficiente y segura. <br />Su enfoque se basa en facilitar el acceso a talentos 
        especializados, eliminando intermediarios y optimizando la experiencia de contratación.
</p>
      </div>
      </div>


    
      </>
  )
}

export default Home 