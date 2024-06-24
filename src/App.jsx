import { useState, useEffect } from 'react';
import { PrimeReactProvider } from 'primereact/api';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/public/Home';
import Login from './pages/public/Login';
import Footer from './components/Footer';
import NavBAr from './components/Navbar';
import Services from './pages/public/Services';
import Models from './pages/public/Models';
import './App.css'
import './styles/stylemain.css'
import Project from './pages/public/projects/Project';
import DashBoards from './pages/private/DashBoards';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
      let startAPI = import.meta.env.VITE_URL_API;
  },[]);
  return (
    <PrimeReactProvider>
      <BrowserRouter>
        <NavBAr />
        <Routes>
          <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn} />}></Route>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/services' element={<Services/>}></Route>
          <Route path='/project' element={<Project/>}></Route>
          <Route path='/models' element={<Models/>}></Route>
          <Route path="/dashboard" element={<ProtectedRoute element={DashBoards} />} />
          {/* <Route path='*' element={<Navigate to='/' replace />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>

    </PrimeReactProvider>
  )
}

export default App
