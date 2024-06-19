import { useState } from 'react';
import { PrimeReactProvider } from 'primereact/api';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Footer from './components/Footer/Footer';
import NavBAr from './components/NavBar/Navbar';
import Services from './components/Services/Services';
import './App.css'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <PrimeReactProvider>
      <BrowserRouter>
        <NavBAr />
        <Routes>
          <Route path='/' element={<Login setIsLoggedIn={setIsLoggedIn} />}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/services' element={<Services/>}></Route>
          {/* <Route path='*' element={<Navigate to='/' replace />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>

    </PrimeReactProvider>
  )
}

export default App
