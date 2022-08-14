import './App.css'
import './styles/main.css'
import * as React from 'react';
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Navbar"
import HomePage from "./pages/HomePage/HomePage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import RegisterPage from './pages/RegisterPage/RegisterPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
// import CssBaseline from '@mui/material/CssBaseline'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <div className="App">
        {/* <CssBaseline /> */}
        <Header />
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='home' element={<HomePage />} />
          <Route path='my-profile' element ={<ProfilePage />} />
          <Route path='register' element={<RegisterPage />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
        <Footer />
    </div>
  )
}

export default App