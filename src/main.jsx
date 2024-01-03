import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './style.scss'
import Navbar from "../sections/Navbar.jsx"
import Hero from "../sections/Hero.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Navbar />
    <Hero />
  </React.StrictMode>
)
