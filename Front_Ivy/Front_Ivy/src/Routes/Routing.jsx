import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Page_Register from "../Register/Page_Register"
import Page_Log from "../Log-in/pages/Page_Log"
import Home from "../Home/Home_page"
function Routing() {

  return (
    <Router>

        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Log' element={<Page_Log/>}/>
            <Route path='/Register' element={<Page_Register/>}/>

        </Routes>


        </Router>
  )
}

export default Routing