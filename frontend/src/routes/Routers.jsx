
import Home from "../pages/Home";
import Services from "../pages/Services";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Contact from "../pages/Contact";
import Doctors from "../pages/Docters/Docters";
import DocterDetails from '../pages/Docters/DoctorDetails';

import {Routes,Route} from 'react-router-dom'


const Routers = () => {
  return <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/docters' element={<Doctors/>}/>
    <Route path='/docters/:id' element={<DocterDetails/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Signup/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/Services' element={<Services/>}/>

  </Routes>
}

export default Routers