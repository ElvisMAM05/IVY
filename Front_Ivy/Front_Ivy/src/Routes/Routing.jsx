import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Page_Register from "../Register/Page_Register"
import Page_Log from "../Log-in/pages/Page_Log"
import User_Page from "../User/Pages/User_Page"
import Admin_Pages from "../Admi/Pages/Admin_Pages"
import Test_Pages from "../Test/Test_Pages"
import Details_page from "../Detalles/Pages/Details_page"
import Comentarios from "../Detalles/Components/Comentarios"
import Usuario_page from "../Usuario/Pages/Usuario_page"
import Welcome from "../Usuario/Components/Welcome"
import TrabajosCategoria from "../Multi_Components/Categoria_Servicios"
function Routing() {

  return (
    <Router>

        <Routes>
           
        <Route path='/Log' element={<Page_Log/>}/>
        <Route path='/Register' element={<Page_Register/>}/>
        <Route path='/' element={<User_Page />}/>
        <Route path='/Admin' element={<Admin_Pages/>}/>
        <Route path='*' element={<h1>404 Not Found</h1>}/>
        <Route path='/Test' element={<Test_Pages/>}/>
        <Route path="/Details/:servicioId" element={<Details_page />} />
        <Route path='usuario' element={<Usuario_page/>}/>
        <Route path='Welcome' element={<Welcome/>}/>
        <Route path="/TrabajosCategoria/:categoriaId" element={<TrabajosCategoria />} />
        {/* Add more routes as needed */}

          

        </Routes>


        </Router>
  )
}

export default Routing