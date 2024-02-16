import Home from "./Components/Home"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landingscreen from "./Components/Landingscreen"
import Login from "./Components/Login"
import Signup from "./Components/Signup"
import Profile from "./Components/Profile"
import Devtask from "./Components/Devtask"

const App =()=>{
    return(
        <div>
            <BrowserRouter>
            <Home/>
              <Routes>
                <Route element = {<Landingscreen/>} path="/"/>
                <Route element = {<Signup/>} path="/sign"/>
                <Route element = {<Login/>} path="/login"/>
                <Route element = {<Profile/>} path="/profile"/>
                <Route element = {<Devtask/>} path="/devtask"/>
                <Route/>

              </Routes>
            </BrowserRouter>
        
        </div>
    )
}
export default App