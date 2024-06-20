import { useState } from 'react';
import { PrimeReactProvider } from 'primereact/api';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/public/Home/Home';
import Login from './pages/public/Login/Login';
import Footer from './components/Footer/Footer';
import NavBAr from './components/NavBar/Navbar';
import Services from './pages/public/Services/Services';
import './App.css'
import Project from './pages/public/projects/Project';
import MenuLeft from './components/MenuLeft/MenuLeft';
import DashBoards from './pages/private/ModuleDashBoards/DashBoards';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <PrimeReactProvider>
      <BrowserRouter>
        <NavBAr />
        <Routes>
          <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn} />}></Route>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/services' element={<Services/>}></Route>
          <Route path='/project' element={<Project/>}></Route>
          <Route path='/dashboard' element={<DashBoards/>}></Route>
          {/* <Route path='*' element={<Navigate to='/' replace />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>

    </PrimeReactProvider>
  )
}

export default App
