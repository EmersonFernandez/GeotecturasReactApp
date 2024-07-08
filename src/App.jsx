import { useState, useEffect } from 'react';
import { PrimeReactProvider } from 'primereact/api';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/public/Home';
import Login from './pages/public/Login';
import Footer from './components/Footer';
import NavBAr from './components/Navbar';
import Services from './pages/public/Services';
import Models from './pages/public/Models';
// import './App.css'
// import './styles/stylemain.css'
import Project from './pages/public/Project';
import DashBoards from './pages/private/DashBoards';
import ProtectedRoute from './components/ProtectedRoute';
import Home2 from './pages/public/Home2';

import WaterSurface from './practicasTexturas/WaterSurface';
import FatherShereGui from './practicasTexturas/FatherShereGui';
import FatherCity from './practicasTexturas/FatherCity';
import Scrolly from './pages/Scroll';
import FramerMotion from './practicasTexturas/FramerMetion';
import SpringReact from './practicasTexturas/Spring';
import Car from './practicasTexturas/Car';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <PrimeReactProvider>
      <BrowserRouter>
        <NavBAr />
        <Routes>
          <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn} />}></Route>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/home' element={<Home2/>} > </Route>
          <Route path='/services' element={<Services/>}></Route>
          <Route path='/project' element={<Project/>}></Route>
          <Route path='/models' element={<Models/>}></Route>
          <Route path='/texturas' element={<WaterSurface/>}></Route>
          <Route path='/texturas2' element={<FatherShereGui/>}></Route>
          <Route path='/texturas3' element={<FatherCity/>}></Route>
          <Route path='/tooltip' element={<Scrolly/>}></Route>
          <Route path='/animate' element={<FramerMotion/>}></Route>
          <Route path='/spring' element={<SpringReact/>}></Route>
          <Route path='/car' element={<Car/>}></Route>
          <Route path="/dashboard" element={<ProtectedRoute element={DashBoards} />} />
          {/* <Route path='*' element={<Navigate to='/' replace />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>

    </PrimeReactProvider>
  )
}

export default App
