import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import LoginForm from './Components/LoginForm';
import Catagories from './Pages/Catagories';
import Business from './Pages/Business';
import Entertainment from './Pages/Entertainment';
import Health from './Pages/Health';
import Science from './Pages/Science';
import Sports from './Pages/Sports';
import Technology from './Pages/Technology';
export default function App() {
  return (
  <>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/general' element={<Catagories cat='general'/>}/>
    <Route path='/Business' element={<Catagories cat=<Business/>/>}/>
    <Route path='/Entertainment' element={<Catagories cat=<Entertainment/>/>}/>
    <Route path='/Health' element={<Catagories cat=<Health/>/>}/>
    <Route path='/Science' element={<Catagories cat=<Science/>/>}/>
    <Route path='/Sports' element={<Catagories cat=<Sports/>/>}/>
    <Route path='/Technology' element={<Catagories cat=<Technology/>/>}/>
 
    <Route path='/login' element={<LoginForm/>}/>
  </Routes>
  
    
  </>
  )
}
