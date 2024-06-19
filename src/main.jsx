import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'

// import 'primereact/resources/themes/md-dark-indigo/theme.css'; 
// import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/themes/lara-dark-blue/theme.css';
// import 'primereact/resources/primereact.min.css'; // CSS de PrimeReact
import 'primeicons/primeicons.css'; // Iconos de PrimeReact
import 'primeflex/primeflex.css';




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
