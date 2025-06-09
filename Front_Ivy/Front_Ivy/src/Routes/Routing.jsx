import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Page_Register from "../Register/Page_Register"
import Page_Log from "../Log-in/pages/Page_Log"
import Home from "../Home/Pages/Home_page"
import User_Page from "../User/Pages/User_Page"
import Admin_Pages from "../Admi/Pages/Admin_Pages"
import Test_Pages from "../Test/Test_Pages"

function Routing() {

  return (
    <Router>

        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Log' element={<Page_Log/>}/>
            <Route path='/Register' element={<Page_Register/>}/>
            <Route path='/User' element={<User_Page />}/>
            <Route path='/Admin' element={<Admin_Pages/>}/>
            <Route path='*' element={<h1>404 Not Found</h1>}/>
            <Route path='/Test' element={<Test_Pages/>}/>
          

        </Routes>


        </Router>
  )
}

export default Routing