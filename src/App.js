
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About';
import Qualifications from './components/Qualifications';
import Contact from './components/Contact';
import Inshort from './components/Inshort';
import { Routes,Route,BrowserRouter,NavLink, Router } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';


import Jobdetails from './components/Jobdetails';
import Header from './components/Header';
import Login from './components/Login';
import Secondary from './components/Secondary';
import Seniorsecondary from './components/Seniorsecondary';
import Btech from './components/Btech';
import MBA from './components/MBA';


import Certifications from './components/Certifications';




function App() {
  
  return (
   <div>

    

   <BrowserRouter>

   <Navbar className='navbar'>

   <Header/>
  
   <NavLink className='nav-items' to='/'>ABOUT ME</NavLink>
  <NavLink className='nav-items' to='/contact'>CONTACT ME</NavLink>
  <NavLink className='nav-items' to='/qualifications'>ACADEMICS</NavLink>
  <NavLink className='nav-items' to='/form'><u>JOIN ME!</u></NavLink>
 
  <NavLink  className='nav-items' to='/certifications'>My Certificates</NavLink>
  

    </Navbar>
   <Routes>
   <Route path='/' element={<About/>}></Route>
   <Route path='/qualifications' element={<Qualifications/>}></Route>
   <Route path='/contact' element={<Contact/>}></Route>
   <Route path='/form' element={<Inshort/>}></Route>
   <Route path='/jobdetails' element={<Jobdetails/>}></Route>
   <Route path='/certifications' element={<Certifications/>}></Route>
   <Route path='/login' element={<Login/>}></Route>
   <Route path='/10' element={<Secondary/>}></Route>
   <Route path='/12' element={<Seniorsecondary/>}></Route>
   <Route path='/btech' element={<Btech/>}></Route>
   <Route path='/mba' element={<MBA/>}></Route>
   
   </Routes>

  
   
   </BrowserRouter>
   
   
  
   
   </div>
  );
}

export default App;
