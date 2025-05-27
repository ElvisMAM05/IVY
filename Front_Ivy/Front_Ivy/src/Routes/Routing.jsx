import Page_Register from "../Register/Page_Register"
import Page_Log from "../Log-in/Page_Log"
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