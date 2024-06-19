import { useEffect, useState } from 'react';
import { PrimeReactProvider } from 'primereact/api';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Footer from './components/Footer/Footer';
import NavBAr from './components/NavBar/Navbar';
import './App.css'
import Services from './components/Services/Services';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  let themeDark = 'lara-dark-blue/theme.css';
  let ThemeLight = 'lara-light-blue/theme.css';

  const [dark, setDark] = useState(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    return savedDarkMode ? JSON.parse(savedDarkMode) : false;  // Default to false if not set
  });

  const changeTheme = (isDark) => {
    const themeElementDark = document.getElementById('app-theme-dark');
    const themeElementLight = document.getElementById('app-theme-light');

    if (isDark) {
      themeElementDark.removeAttribute('disabled');
      themeElementLight.setAttribute('disabled', true);
    } else {
      themeElementDark.setAttribute('disabled', true);
      themeElementLight.removeAttribute('disabled');
    }
  };

  useEffect(() => {
    changeTheme(dark);
  }, []);


  return (
    <PrimeReactProvider>
      <BrowserRouter>
        <NavBAr />
        <Routes>
          <Route path='/' element={<Login setIsLoggedIn={setIsLoggedIn} />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/services' element={<Services />}></Route>
          {/* <Route path='*' element={<Navigate to='/' replace />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>

    </PrimeReactProvider>
  )
}

export default App
