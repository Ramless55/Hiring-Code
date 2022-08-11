import './App.css'
import * as React from 'react';
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import RegisterPage from './pages/RegisterPage/RegisterPage';
// import CssBaseline from '@mui/material/CssBaseline'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <div className="App">
        {/* <CssBaseline /> */}
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='home' element={<HomePage />} />
          <Route path='register' element={<RegisterPage />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
        <Footer />
    </div>
  )
}

export default App